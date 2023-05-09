const User = require('../models/User');

const resolvers = {
  Mutation: {
    async createUser(_, args) {
      const { name, email, password } = args;
      const user = new User({ name, email, password });
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;
