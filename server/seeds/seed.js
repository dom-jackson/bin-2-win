const db = require('../config/connection');
const { User, Pickup } = require('../models');

const userData = require('./userData.json');
const pickupData = require('./pickupData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Pickup.deleteMany({});

  const users = await User.insertMany(userData);

  const pickups = pickupData.map((pickup) => {
    const user = users.find((user) => user.email === pickup.user_email);
    if (!user) {
      throw new Error(`Could not find user with email ${pickup.user_email}`);
    }
    const p = { ...pickup, user_id: user._id.toString() };
    console.log(p);
    return p;
  });

  await Pickup.insertMany(pickups);

  console.log('Data seeded!');
  process.exit(0);
});
