import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import { NewPickup } from './pages/NewPickup';
import Account from './pages/Account';
import Rewards from './pages/Rewards';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ChakraProvider>
        <ApolloProvider client={client}>
          <Router>
            <Header />
            <Routes>
              {<Route path="/book-pickup" element={<NewPickup />} />}
              <Route path="/" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/rewards" element={<Rewards />} />
            </Routes>
            <Footer />
          </Router>
        </ApolloProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
