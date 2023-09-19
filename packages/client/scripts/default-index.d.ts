/* eslint-disable @typescript-eslint/no-unused-vars */

import * as runtime from '@prisma/client/runtime/library'

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new Prisma()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client).
 */
export declare const PrismaClient: any

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new Prisma()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client).
 */
export declare type PrismaClient = any

export declare class PrismaClientExtends<ExtArgs extends runtime.ExtensionArgs = runtime.DefaultArgs> {
  $extends: { extArgs: ExtArgs } & (<
    R extends runtime.UserArgs['result'] = {},
    M extends runtime.UserArgs['model'] = {},
    Q extends runtime.UserArgs['query'] = {},
    C extends runtime.UserArgs['client'] = {},
    Args extends runtime.ExtensionArgs = runtime.InternalArgs<R, M, {}, C>,
  >(
    args:
      | ((client: PrismaClientExtends<ExtArgs>) => { $extends: { extArgs: Args } })
      | { name?: string }
      | { result?: R & runtime.UserArgs['result'] }
      | { model?: M & runtime.UserArgs['model'] }
      | { query?: Q & runtime.UserArgs['query'] }
      | { client?: C & runtime.UserArgs['client'] },
  ) => PrismaClientExtends<Args & ExtArgs> & Args['client'])

  $transaction<R>(
    fn: (prisma: Omit<this, runtime.ITXClientDenyList>) => Promise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: string },
  ): Promise<R>
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: string },
  ): Promise<runtime.Types.Utils.UnwrapTuple<P>>
}

export declare const dmmf: any
export declare type dmmf = any

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

export namespace Prisma {
  export type TransactionClient = any

  export function defineExtension<
    R extends runtime.UserArgs['result'] = {},
    M extends runtime.UserArgs['model'] = {},
    Q extends runtime.UserArgs['query'] = {},
    C extends runtime.UserArgs['client'] = {},
    Args extends runtime.ExtensionArgs = runtime.InternalArgs<R, M, {}, C>,
  >(
    args:
      | ((client: PrismaClientExtends) => { $extends: { extArgs: Args } })
      | { name?: string }
      | { result?: R & runtime.UserArgs['result'] }
      | { model?: M & runtime.UserArgs['model'] }
      | { query?: Q & runtime.UserArgs['query'] }
      | { client?: C & runtime.UserArgs['client'] },
  ): (client: any) => PrismaClientExtends<Args>

  export type Extension = runtime.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = runtime.Args
  export import Payload = runtime.Payload
  export import Result = runtime.Result
  export import Exact = runtime.Exact
  export import PrismaPromise = runtime.PrismaPromise

  export const prismaVersion: {
    client: string
    engine: string
  }
}
