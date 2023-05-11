const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    points: Int
    pickups: [Pickup!]!
  }

  type Pickup {
    _id: ID!
    date: String!
    address: String!
    recycle_material: String!
    weight: Int!
    phone_number: String!
    user_email: String!
  }

  type Query {
    user(id: ID!): User!
    users: [User!]!
    pickup(id: ID!): Pickup!
    pickups: [Pickup!]
    loginUser(email: String!, password: String!): User!
  }
  type Mutation {
    loginUser(email: String!, password: String!): User!
    createUser(name: String!, email: String!, password: String!): User!
    createPickup(
      date: String!
      address: String!
      recycle_material: String!
      weight: Int!
      phone_number: String!
    ): Pickup!
    updateUser(id: ID!, name: String, email: String, password: String): User!
    updatePickup(
      id: ID!
      date: String
      address: String
      recycle_material: String
      weight: Int
      phone_number: String
    ): Pickup!
    deleteUser(id: ID!): User!
    deletePickup(id: ID!): Pickup!
  }
`;

module.exports = typeDefs;
