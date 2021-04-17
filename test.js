const { AuthorizationCode } = require('simple-oauth2')

const main = async () => {
  const client = new AuthorizationCode({
    client: {
      id: 'minhnh21',
      secret: 'minhnh21',
    },
    auth: {
      tokenHost: 'http:localhost:4444',
      authorizeHost: 'http:localhost:4444',
      tokenPath: '/oauth2/token',
      authorizePath: 'oauth2/authorize',
    },
    options: {
      authorizationMethod: 'body',
    },
  })

  const tokenParams = {
    code,
    redirect_uri: 'http://localhost:9010/callback',
  }
  console.log(tokenParams)

  try {
    const accessToken = await client.getToken(tokenParams)
    console.log(accessToken)
  } catch (err) {
    console.log(err)
  }
}

main()
