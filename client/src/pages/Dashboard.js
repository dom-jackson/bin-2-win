import { Container } from '@chakra-ui/react';
import NewAccount from './NewAccount';

const Dashboard = () => {
  return (
    <Container>
      <h1>Create Account</h1>
      <NewAccount />
    </Container>
  );
};

export default Dashboard;
