const resolvers = {
  Query: {
    hello: () => ({}),
  },
  HelloMessage: {
    message: (_, { name }) => `Hello ${name}`,
  },
};

module.exports = resolvers;
