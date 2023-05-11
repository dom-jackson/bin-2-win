import { Box, Container, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Box boxSize="md">
        <Image src="./images/Logo3.png" alt="Bin 2 Win logo" />
      </Box>
      <Flex as="nav" p="10px" alignItems="center" gap="30px">
        <ul>
          <li>
            <Link to="/book-pickup">Book a Pickup</Link>
          </li>
          <li>
            <Link to="/rewards">Redeem Rewards</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Flex>
    </Container>
  );
};

export default Header;
