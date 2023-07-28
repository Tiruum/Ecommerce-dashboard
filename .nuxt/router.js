import { createRouter as customCreateRouter } from '../router.js'

import { createRouter as createDefaultRouter, routerOptions } from './defaultRouter'

export function createRouter(ssrContext, config, store) {
  return customCreateRouter(ssrContext, createDefaultRouter, routerOptions, config, store)
}
