
const EleventyFetch = require('@11ty/eleventy-fetch')
module.exports = async function () {
  const result = {}
  
  result['countries'] = (await EleventyFetch('https://countries.trevorblades.com/graphql', {
    duration: '2s',
    type: 'json',
    fetchOptions: {
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        query: `query {
  __typename
  continents(filter: {}) {
    __typename
    name
    countries {
      __typename
      name
    }
  }
}`,
      })
    }
  })).data


  result['strapi'] = (await EleventyFetch('http://localhost:1337/graphql', {
    duration: '2s',
    type: 'json',
    fetchOptions: {
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        query: `query {
  __typename
  posts(pagination: {}, sort: [], publicationState: "LIVE") {
    __typename
    data {
      __typename
      attributes {
        __typename
        Title
        Date
      }
    }
  }
}`,
      })
    }
  })).data

  return result
}
  