import { getTraceParent } from '../../../client/src/runtime/core/tracing/getTraceParent'
import { TracingConfig } from '../../../client/src/runtime/core/tracing/getTracingConfig'

it('should return 00 traceparent when tracing is disabled', () => {
  const tracingConfig: TracingConfig = {
    enabled: false,
    middleware: false,
  }

  const result = getTraceParent({
    tracingConfig,
  })

  const [ending] = result.split('-').reverse()

  expect(ending).toEqual('00')
})
