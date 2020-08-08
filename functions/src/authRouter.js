const express = require("express")
const functions = require('firebase-functions');
const ClientOAuth2 = require("client-oauth2")

const r = express.Router()


const githubAuth = new ClientOAuth2({
  clientId: functions.config().auth.github_client_id,
  clientSecret: functions.config().auth.github_client_secret,
  accessTokenUri: "https://github.com/login/oauth/access_token",
  authorizationUri: "https://github.com/login/oauth/authorize",
  redirectUri: "https://us-central1-netlifire.cloudfunctions.net/oauth/github/callback",
  scopes: ["repo", "user"],
})

const originPattern = functions.config().auth.origin
if ("".match(originPattern)) {
  console.warn(
    "Insecure ORIGIN pattern used. This can give unauthorized users access to your repository."
  )
  if (process.env.NODE_ENV === "production") {
    console.error("Will not run without a safe ORIGIN pattern in production.")
    process.exit()
  }
}

r.get("/github/auth", (req, res) => {
  res.redirect(githubAuth.code.getUri())
})

// Callback service parsing the authorization token and asking for the access token
r.get("/github/callback", (req, res) => {
  githubAuth.code
    .getToken("https://us-central1-netlifire.cloudfunctions.net/oauth" + req.originalUrl)
    .then(function (user) {
      const script = `
    <script>
    (function() {
      function recieveMessage(e) {
        console.log("recieveMessage %o", e)
        if (!e.origin.match(${JSON.stringify(originPattern)})) {
          console.log('Invalid origin: %s', e.origin);
          return;
        }
        // send message to main window with da app
        window.opener.postMessage(
          'authorization:${"github"}:${"success"}:{"token":"${user.accessToken}"}',
          e.origin
        )
      }
      window.addEventListener("message", recieveMessage, false)
      // Start handshare with parent
      console.log("Sending message: %o", "${"github"}")
      window.opener.postMessage("authorizing:${"github"}", "*")
    })()
    </script>`
      return res.send(script)
    })
    .catch(err => {
      console.error(err)
      return res.status(500).send("Internal server error")
    })
})

module.exports = r
