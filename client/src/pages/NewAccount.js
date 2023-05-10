import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import {
  Container,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';

const CreateAccountForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({ variables: { name, email, password } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxW="sm">
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        {error && <p>{error.message}</p>}
        <FormControl padding="1em" isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Your name"
          />
        </FormControl>
        <FormControl padding="1em" isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email address"
          />
        </FormControl>
        <FormControl padding="1em" isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Choose a secure password"
          />
        </FormControl>
        <Button mt={4} isLoading={loading} type="submit">
          Create Account
        </Button>
      </form>
    </Container>
  );
};

export default CreateAccountForm;
