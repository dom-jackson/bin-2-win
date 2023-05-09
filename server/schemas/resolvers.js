const resolvers = {
  Query: {
    message: (_, { name }) => `Hello ${name}`,
  },
};

module.exports = resolvers;
