const db = require('../config/connection');
const { User, Pickup } = require('../models');

const userData = require('./userData.json');
const pickupData = require('./pickupData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Pickup.deleteMany({});

  const users = await User.create(userData);

  for (const pickup of pickupData) {
    const user = users.find((user) => user.email === pickup.user_email);
    if (!user) {
      throw new Error(`Could not find user with email ${pickup.user_email}`);
    }
    const pickupObj = new Pickup({
      ...pickup,
      user_id: user._id,
    });
    await pickupObj.save();
    user.pickups.push(pickupObj._id);
    await user.save();
  }

  console.log('Data seeded!');
  process.exit(0);
});
