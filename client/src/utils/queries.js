import { gql } from '@apollo/client';

export const HELLO_QUERY = gql`
  query HelloQuery($name: String!) {
    message(name: $name)
  }
`;
