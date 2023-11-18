import Eleventy from './js/silex-plugin-11ty/client.js'
export default function(config, options) {
  config.addPlugin(Eleventy, {
    dataSources: [{
    //  id: 'anime',
    //  type: 'graphql',
    //  label: 'Anime',
    //  url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json',
    //  }
    //}, {
      id: 'countries',
      type: 'graphql',
      label: 'Countries',
      url: 'https://countries.trevorblades.com/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 36a91bf6db9a01b8e80e18782d3eaa5edf1a19673bf7558a6046b384428ff6d85a448a8766dbafbaa14cc7d66d305a0fdc04384d8381299fff4c91468bed1855307a6b1f1486433be0baa9f354a3a0388f45712b7429dbb35e84bf91a28a4eeca8b65732d058943dd3cab8f9515817ca287618bbefefc406f55655b129b31a60`,
      },
    }, {
      id: 'strapi',
      type: 'graphql',
      label: 'Strapi',
      url: 'http://127.0.0.1:1337/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }],
  })
  config.on('silex:startup:end', () => {
    const editor = config.getEditor()
    editor.on('storage:end:store', async () => {
      editor.runCommand('publish')
    })
  })
}
