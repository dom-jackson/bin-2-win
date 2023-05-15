import { Box, Container, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Box boxSize="md">
        <Image src="./images/Logo3.png" alt="Bin 2 Win logo" />
      </Box>
      <Flex as="nav" p="10px">
        <ul
          style={{
            listStyleType: 'none',
          }}
        >
          <li>
            <Link to="/book-pickup" fontSize="lg">
              Book a Pickup
            </Link>
          </li>
          <li>
            <Link to="/rewards" fontSize="lg">
              Redeem Rewards
            </Link>
          </li>
          <li>
            <Link to="/account" fontSize="lg">
              Login/Signup
            </Link>
          </li>
        </ul>
      </Flex>
    </Container>
  );
};

export default Header;
