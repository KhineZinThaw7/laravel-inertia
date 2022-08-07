import './bootstrap'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { Config, RouteParamsWithQueryOverload, Router } from 'ziggy-js'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init()

declare function route(): Router;
declare function route(
    name: string,
    params?: RouteParamsWithQueryOverload,
    absolute?: boolean,
    config?: Config,
): string;

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .mixin({
        methods: {
            route: (name: any, params: any, absolute: any, Ziggy?: Config) =>
                route(name, params, absolute, Ziggy),
        },
    })
      .mount(el)
  },
})
