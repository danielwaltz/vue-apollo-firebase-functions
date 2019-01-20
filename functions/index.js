const { https } = require('firebase-functions');
const setupServer = require('./graphql');

const server = setupServer();
const api = https.onRequest(server);

module.exports = { api };
