import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
      user {
        name
        email
        password
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        points
      }
    }
  }
`;
export const CREATE_PICKUP = gql`
  mutation createPickup(
    $date: String!
    $address: String!
    $recycle_material: String!
    $weight: Int!
    $phone_number: String!
  ) {
    createPickup(
      date: $date
      address: $address
      recycle_material: $recycle_material
      weight: $weight
      phone_number: $phone_number
    ) {
      _id
      date
      address
      recycle_material
      weight
      phone_number
      user {
        _id
      }
    }
  }
`;
