import React from 'react';
import { useQuery } from '@apollo/client';
import { HELLO_QUERY } from '../utils/queries';

function Greeting() {
  const { loading, error, data } = useQuery(HELLO_QUERY, {
    variables: { name: 'Dom' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <p>{data.message}</p>;
}

export default Greeting;
