const User = require('../models/User');
const Pickup = require('../models/Pickups');

const resolvers = {
  Query: {
    async users() {
      const users = await User.find().populate('pickups');
      return users;
    },
    async user(_, { id }) {
      const user = await User.findById(id).populate('pickups');
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
  },
  Mutation: {
    async login(_, { email, password }) {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Invalid login credentials');
      }
      if (user.password !== password) {
        throw new Error('Invalid login credentials');
      }
      return user;
    },
    async createUser(_, args) {
      const { name, email, password } = args;
      const user = new User({ name, email, password });
      await user.save();
      return user;
    },
    async addPickup(_, { userId, pickupData }) {
      const pickup = new Pickup(pickupData);
      await pickup.save();

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { pickups: pickup._id } },
        { new: true }
      ).populate('pickups');

      return pickup;
    },
  },
};

module.exports = resolvers;
