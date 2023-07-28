export const BarChart = () => import('../..\\components\\BarChart.vue' /* webpackChunkName: "components/bar-chart" */).then(c => wrapFunctional(c.default || c))
export const Card = () => import('../..\\components\\Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LineChart = () => import('../..\\components\\LineChart.vue' /* webpackChunkName: "components/line-chart" */).then(c => wrapFunctional(c.default || c))
export const LineChartWeekly = () => import('../..\\components\\LineChartWeekly.vue' /* webpackChunkName: "components/line-chart-weekly" */).then(c => wrapFunctional(c.default || c))
export const Main = () => import('../..\\components\\Main.vue' /* webpackChunkName: "components/main" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Sidebar = () => import('../..\\components\\Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const TagInput = () => import('../..\\components\\TagInput.vue' /* webpackChunkName: "components/tag-input" */).then(c => wrapFunctional(c.default || c))
export const VerticalTagInput = () => import('../..\\components\\verticalTagInput.vue' /* webpackChunkName: "components/vertical-tag-input" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
