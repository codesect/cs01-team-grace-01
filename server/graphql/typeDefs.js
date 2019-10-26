const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Comment {
    _id: ID
    author: String!
    text: String!
    createdAt: String!
  }

  type PhoneNumber {
    _id: ID
    caller: [String]!
    callType: [String]!
    country: String
    number: String!
    ratings: [Rating]
    score: Float!
    searches: Int!
  }

  type Rating {
    _id: ID
    author: String!
    caller: String
    callType: String
    createdAt: String
    comments: [Comment]
    message: String!
    number: PhoneNumber
    score: Float
  }

  type Query {
    getLatestRatings(max: Int): [Rating]
    getRatings: PhoneNumber
  }
`;
