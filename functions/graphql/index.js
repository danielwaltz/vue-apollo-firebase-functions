const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { wallpapers } = require('./data.js');

const setupServer = () => {
  const typeDefs = gql`
    type Wallpaper {
      id: ID!
      name: String
      url: String
    }

    type Query {
      helloWorld(message: String): String
      wallpapers: [Wallpaper]!
      wallpaper(id: ID!): Wallpaper
    }
  `;

  const resolvers = {
    Query: {
      helloWorld: (parent, { message = 'world' }) => {
        return `Hello ${message}!`;
      },
      wallpapers: () => {
        return wallpapers || [];
      },
      wallpaper: (parent, { id }) => {
        return wallpapers.find(item => item.id === id) || {};
      },
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
