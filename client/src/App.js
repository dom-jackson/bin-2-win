import React from 'react';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import { NewPickup } from './pages/NewPickup';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

const theme = extendTheme({
  colors: {
    primary: '#83B271',
    secondary: '#243247',
  },
});

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
          <Router>
            <Header />
            <Routes>
              {<Route path="/book-pickup" element={<NewPickup />} />}
              <Route path="/" element={<Dashboard />} />
            </Routes>
            <Footer />
          </Router>
        </ApolloProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
