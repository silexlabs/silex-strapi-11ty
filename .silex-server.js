const StaticPlugin = require('@silexlabs/silex/dist/plugins/server/plugins/server/StaticPlugin').default
const node_modules = require('node_modules-path')
console.log('node_modules', node_modules('@silexlabs/silex-cms'))
module.exports = function(config, options) {
  config.addPlugin(StaticPlugin, {
    routes: [
      {
        route: '/js/silex-cms/',
        path: node_modules('@silexlabs/silex-cms') + '/@silexlabs/silex-cms/dist/',
      },
    ],
  })
}
