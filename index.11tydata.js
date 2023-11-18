
const EleventyFetch = require('@11ty/eleventy-fetch')
module.exports = async function () {
  const result = {}
  
  result['strapi'] = (await EleventyFetch('http://127.0.0.1:1337/graphql', {
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
        Content
        Date
        createdAt
      }
    }
  }
}`,
      })
    }
  })).data

  return result
}
  