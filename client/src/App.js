import { Dashboard } from './pages/Dashboard';
// import { NewPickup } from './pages/NewPickup';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Greeting from './components/Greeting';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <h1>Bin2Win</h1>
        <Dashboard />
        <Greeting />
      </ApolloProvider>
    </div>
  );
}

export default App;
