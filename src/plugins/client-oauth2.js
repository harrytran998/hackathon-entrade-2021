const { ClientCredentials } = require('simple-oauth2')
// import { ClientCredentials } from 'simple-oauth2'

export const getToken = async (code) => {
  const client = new ClientCredentials({
    client: {
      id: 'minhnh21',
      secret: 'minhnh21',
    },
    auth: {
      tokenHost: 'http://192.168.0.141:4444',
      authorizeHost: 'http://192.168.0.141:4444',
      tokenPath: '/oauth2/token',
      authorizePath: 'oauth2/authorize',
    },
    options: {
      authorizationMethod: 'body',
    },
  })

  const tokenParams = {
    code,
    redirect_uri: 'http://127.0.0.1:9010/callback',
  }

  try {
    const response = await client.getToken(tokenParams)
    console.log(response)
    return response.token
  } catch (err) {
    console.log(err)
  }
}
