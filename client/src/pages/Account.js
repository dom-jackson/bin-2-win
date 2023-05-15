import { Container } from '@chakra-ui/react';
import Login from '../components/login';
import NewAccount from '../components/NewAccount';

const Account = () => {
  return (
    <Container>
      <Login />
      <NewAccount />
    </Container>
  );
};

export default Account;
