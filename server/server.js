const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const app = express();

const PORT = 3001;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.static(path.join(__dirname, '../client/build')));

const startServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(
      `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
  });
};

startServer();
