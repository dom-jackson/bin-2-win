const User = require('../models/User');
const jwt = require('jsonwebtoken');

const resolvers = {
  Mutation: {
    async loginUser(_, { email, password }) {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Invalid login credentials');
      }
      if (user.password !== password) {
        throw new Error('Invalid login credentials');
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      return { user, token };
    },
    async createUser(_, args) {
      const { name, email, password } = args;
      const user = new User({ name, email, password });
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;
