import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../utils/mutations';
import {
  Container,
  FormLabel,
  FormControl,
  Button,
  Input,
  Heading,
} from '@chakra-ui/react';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [loginUser, { error, data }] = useMutation(LOGIN_MUTATION);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    console.log(formState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formState);
    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      console.log(data.loginUser);
      // window.location.replace('/');
    } catch (error) {
      console.log(error);
    }

    // setFormState({
    //   email: '',
    //   password: '',
    // });
  };

  return (
    <Container>
      <Heading textAlign="center">Login</Heading>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the Dashboard.</Link>
        </p>
      ) : (
        <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
          <FormControl padding="1em" isRequired>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              focusBorderColor="green.400"
            />
          </FormControl>
          <FormControl padding="1em" isRequired>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              required
              focusBorderColor="green.400"
            />
          </FormControl>
          <Button padding="1em" mt={4} type="submit">
            Login
          </Button>
        </form>
      )}
      {error && <div>{error.message}</div>}
    </Container>
  );
};

export default Login;
