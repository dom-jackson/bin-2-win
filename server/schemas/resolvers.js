const { User } = require('../models');
const Pickup = require('../models/Pickups');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate({ path: 'pickups', model: 'Pickup' });
    },
    user: async (parent, { userId }) => {
      const user = await User.findOne({ _id: userId }).populate({
        path: 'pickups',
        model: 'Pickup',
      });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      //console.log('reach login');
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user with this email found');
      }

      const correctPw = await user.isCorrectPassword(password);

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
    createPickup: async (
      _,
      { date, address, recycle_material, weight, phone_number },
      context
    ) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error('User not found');
      }

      const pickup = new Pickup({
        date,
        address,
        recycle_material,
        weight,
        phone_number,
        user: user,
      });

      await pickup.save();
      user.pickups.push(pickup);
      await user.save();

      return pickup;
    },
  },
};

module.exports = resolvers;
