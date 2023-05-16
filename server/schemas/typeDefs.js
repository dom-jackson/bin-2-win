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
    _id: ID
    date: String
    address: String
    recycle_material: String
    weight: Float
    phone_number: String
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  input PickupInput {
    date: String!
    address: String!
    recycle_material: String!
    weight: Float!
    phone_number: String!
    user_email: String!
  }

  type Query {
    user(userId: ID!): User
    users: [User]!
    pickup(id: ID!): Pickup!
    pickups: [Pickup!]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(name: String!, email: String!, password: String!): Auth

    createPickup(
      date: String!
      address: String!
      recycle_material: String!
      weight: Int!
      phone_number: String!
    ): Pickup!
  }
`;

module.exports = typeDefs;
