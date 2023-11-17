const StaticPlugin = require('@silexlabs/silex/dist/plugins/server/plugins/server/StaticPlugin').default
const node_modules = require('node_modules-path')
console.log('node_modules', node_modules('@silexlabs/silex-plugin-11ty'))
module.exports = function(config, options) {
  config.addPlugin(StaticPlugin, {
    routes: [
      {
        route: '/js/silex-plugin-11ty/',
        path: node_modules('@silexlabs/silex-plugin-11ty') + '/@silexlabs/silex-plugin-11ty/dist/',
      },
    ],
  })
}
