import type { Promise as PromiseData } from '@prisma/client'
import crypto from 'crypto'

function getFilenameFromStack() {
  const stack = new Error().stack!
  const stackLines = stack
    .split('\n')
    .reverse()
    .map((line) => line.trim())
    .filter((line) => line.split('at')[1])
    .filter((line) => !line.includes('PromiseTracker.ts'))
    .filter((line) => !line.includes('<anonymous>'))
    .join('\n')
  return stackLines
}

async function registerPromise(promise: PromiseData) {
  await fetch('http://localhost:3000/open-promise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(promise),
  })
}

async function closePromise(promise: Pick<PromiseData, 'id' | 'status'>) {
  await fetch('http://localhost:3000/close-promise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(promise),
  })
}

export const PromiseTracker = new Proxy(globalThis.Promise, {
  construct(target, args: any) {
    const id = crypto.randomUUID()
    const register = registerPromise({
      id,
      createdAt: Date.now() as any as bigint,
      fileName: getFilenameFromStack(),
      status: 'unhandled',
    })

    // @ts-ignore
    return new Proxy(new target(...args), {
      get(target, prop) {
        if (prop === 'then') {
          return (...args: any[]) => {
            return target
              .then(...args)
              .then((v) => register.then(() => closePromise({ id, status: 'then' })).then(() => v))
          }
        }

        if (prop === 'catch') {
          return (...args: any[]) => {
            return target
              .catch(...args)
              .then((v) => register.then(() => closePromise({ id, status: 'catch' })).then(() => v))
          }
        }

        if (prop === 'finally') {
          return (...args: any[]) => {
            return target
              .finally(...args)
              .then((v) => register.then(() => closePromise({ id, status: 'finally' })).then(() => v))
          }
        }

        return target[prop]
      },
    })
  },
})
