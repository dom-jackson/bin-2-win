const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    password: String!
  }
  type Query {
    user(id: ID!): User!
    users: [User!]!
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
  }
`;

module.exports = typeDefs;
