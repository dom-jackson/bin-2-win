import { Container, Box, Heading, Text } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_USER_QUERY } from '../utils/queries';

const Dashboard = () => {
  const userId = '6463298d089600a39a53c24b';
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { userId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <Container>
        <p>Error: {error.message}</p>
      </Container>
    );
  }

  const { user } = data;

  return (
    <Container>
      <Box textAlign="center" padding="4" fontSize="xl">
        <Heading>User Details</Heading>
        <Text>Name: {user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Points: {user.points}</Text>
        <Box marginTop="4">
          <Heading>Pickup History</Heading>
          {user.pickups.map((pickup) => {
            const date = new Date(parseInt(pickup.date));
            const formattedDate = date.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            });
            return (
              <Box
                key={pickup._id}
                marginTop="2"
                padding="4"
                border="1px"
                borderRadius="md"
              >
                <Text>Date: {formattedDate}</Text>
                <Text>Address: {pickup.address}</Text>
                <Text>Recyclable Material: {pickup.recycle_material}</Text>
                <Text>Weight: {pickup.weight} Kg</Text>
                <Text>Phone Number: {pickup.phone_number}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
