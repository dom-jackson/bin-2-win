const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: HelloMessage
  }

  type HelloMessage {
    message(name: String!): String!
  }
`;

module.exports = typeDefs;
