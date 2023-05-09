import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({ variables: { name, email, password } });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <button type="submit" disabled={loading}>
        Create Account
      </button>
    </form>
  );
};

export default CreateAccountForm;
