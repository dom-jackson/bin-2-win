import { gql } from '@apollo/client';

export const LOGIN = gql`
  query loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      _id
      name
      email
    }
  }
`;
