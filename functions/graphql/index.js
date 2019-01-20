const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const setupServer = () => {
  const typeDefs = gql`
    type Query {
      hello(message: String): String
    }
  `;

  const resolvers = {
    Query: {
      hello: (parent, { message = 'world' }) => `Hello ${message}!`,
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const app = express();
  server.applyMiddleware({ app });

  return app;
};

module.exports = setupServer;
