require('universal-url').shim();
const functions = require('firebase-functions');
const express = require("express")
const authRouter = require("./authRouter");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const app = express();
app.use("/", authRouter);
module.exports = {
    oauth: functions.https.onRequest(app)
};
