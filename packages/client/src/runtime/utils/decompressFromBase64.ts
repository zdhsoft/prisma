import * as lzString from 'lz-string'

export const decompressFromBase64 =
  TARGET_ENGINE_TYPE === 'data-proxy' || TARGET_ENGINE_TYPE === 'all' ? lzString.decompressFromBase64 : (str) => str
