import { gql } from '@apollo/client';

export const GET_USER_QUERY = gql`
  query GetUser($email: String!) {
    user(email: $email) {
      _id
      name
      email
      points
    }
  }
`;
