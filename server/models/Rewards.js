const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  points: { type: Number, required: true },
  link: { type: String, required: true },
});

const Reward = mongoose.model('Reward', rewardSchema);

module.exports = Reward;
