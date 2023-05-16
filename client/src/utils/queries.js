import { gql } from '@apollo/client';

export const GET_USER_QUERY = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
      points
      pickups {
        _id
        date
        address
        recycle_material
        weight
        phone_number
      }
    }
  }
`;

export const GET_PICKUPS_QUERY = gql`
  query getPickups {
    pickups {
      _id
      date
      address
      recycle_material
      weight
      phone_number
    }
  }
`;
