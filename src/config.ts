// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'jemzlpuqc9'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-74bsa64ucc1c2rnu.us.auth0.com',            // Auth0 domain
  clientId: '6IbVReGaEe20ZEJLyPOGOmR9fyzEGDAe',          // Auth0 client id
  callbackUrl: 'a7e32b3d52c39423e96a86ce691a6562-742956488.us-east-1.elb.amazonaws.com:8080/callback'
}
