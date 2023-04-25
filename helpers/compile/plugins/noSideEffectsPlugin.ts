import type { Plugin } from 'esbuild'

export function noSideEffectsPlugin(pattern: RegExp): Plugin {
  return {
    name: 'noSideEffectsPlugin',
    setup(build) {
      build.onResolve({ filter: pattern }, async (args) => {
        if (args.pluginData?.resolved === true) {
          return undefined
        }
        args.pluginData = { resolved: true }
        const { path, ...rest } = args

        const result = await build.resolve(path, rest)
        result.sideEffects = false
        console.log({ args, result })
        return result
      })
    },
  }
}
