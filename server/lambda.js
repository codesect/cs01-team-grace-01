require('dotenv').config();
const { ApolloServer } = require('apollo-server-lambda');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler();
