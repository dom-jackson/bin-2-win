import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../utils/mutations';
import {
  Container,
  FormLabel,
  FormControl,
  Button,
  Input,
} from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ variables: { email, password } });
      localStorage.setItem('token', data.loginUser.token);
      window.location.replace('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
        <FormControl padding="1em" isRequired>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            focusBorderColor="green.400"
          />
        </FormControl>
        <FormControl padding="1em" isRequired>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            focusBorderColor="green.400"
          />
        </FormControl>
        <Button mt={4} isLoading={loading} type="submit">
          Login
        </Button>
      </form>
      {error && <p>Error logging in. Please try again.</p>}
    </Container>
  );
}

export default Login;
