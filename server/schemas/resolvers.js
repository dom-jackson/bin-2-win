const { User } = require('../models');
const Pickup = require('../models/Pickups');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('pickups');
    },
    user: async (parent, { userId }) => {
      const user = await User.findOne({ _id: userId });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      //console.log('reach login');
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('No user with this email found');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }
      const token = signToken(user);
      return { token, user };
    },
    createUser: async (_, args) => {
      const { name, email, password } = args;
      const user = new User({ name, email, password });
      await user.save();
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
