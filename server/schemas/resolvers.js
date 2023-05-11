const User = require('../models/User');

const resolvers = {
  Query: {
    async loginUser(_, { email, password }) {
      const user = await User.findOne({ email, password });
      if (!user) {
        throw new Error('Invalid login credentials');
      }
      return user;
    },
  },
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
