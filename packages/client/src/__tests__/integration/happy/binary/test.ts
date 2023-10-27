import { getBinaryTargetForCurrentPlatform, getNodeAPIName } from '@prisma/get-platform'
import { ClientEngineType, getClientEngineType } from '@prisma/internals'
import fs from 'fs'
import path from 'path'

import { generateTestClient } from '../../../../utils/getTestClient'

test('binary', async () => {
  expect.assertions(1)
  await generateTestClient()

  const binaryTarget = await getBinaryTargetForCurrentPlatform()
  let binaryPath =
    getClientEngineType() === ClientEngineType.Library
      ? path.join(__dirname, 'node_modules/.prisma/client', getNodeAPIName(binaryTarget, 'fs'))
      : path.join(__dirname, 'node_modules/.prisma/client', `query-engine-${binaryTarget}`)

  if (process.platform === 'win32' && getClientEngineType() === ClientEngineType.Binary) {
    binaryPath += '.exe'
  }

  expect(fs.existsSync(binaryPath)).toBe(true)
})
