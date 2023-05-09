const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    message(name: String!): String!
  }
`;

module.exports = typeDefs;
