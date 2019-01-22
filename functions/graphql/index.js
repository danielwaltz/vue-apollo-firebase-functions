const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { getPhotos, getPhoto } = require('./photos');

const setupServer = () => {
  const typeDefs = gql`
    type Photo {
      id: ID
      title: String
      url: String
    }

    type Query {
      helloWorld(message: String): String
      photos: [Photo]!
      photo(id: ID!): Photo
    }
  `;

  const resolvers = {
    Query: {
      helloWorld: (parent, { message }) => {
        if (!message) return 'Hello world!';
        return `Hello ${message}!`;
      },
      photos: async () => {
        const photos = await getPhotos();
        return photos.data || [];
      },
      photo: async (parent, { id }) => {
        const photo = await getPhoto(id);
        return photo.data || {};
      },
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  server.applyMiddleware({ app });
  return app;
};

module.exports = setupServer;
