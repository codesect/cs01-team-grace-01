require('dotenv').config();
const { ApolloServer } = require('apollo-server-lambda');

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler();
