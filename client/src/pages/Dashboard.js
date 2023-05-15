import { Container, Heading, Text } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_USER_QUERY } from '../utils/queries';

const Dashboard = () => {
  const email = 'john@example.com';
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { user: { email } },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { user } = data;

  return (
    <Container>
      <Heading textAlign="center">User Details</Heading>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Points: {user.points}</Text>
    </Container>
  );
};

export default Dashboard;
