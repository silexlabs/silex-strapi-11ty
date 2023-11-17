import Eleventy from './js/silex-plugin-11ty/client.js'
export default function(config, options) {
  config.addPlugin(Eleventy, {
    dataSources: [{
      id: 'countries',
      type: 'graphql',
      label: 'Countries',
      url: 'https://countries.trevorblades.com/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }, {
      id: 'strapi',
      type: 'graphql',
      label: 'Strapi',
      url: 'http://localhost:1337/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }],
  })
}
