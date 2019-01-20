const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const setupServer = () => {
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
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
