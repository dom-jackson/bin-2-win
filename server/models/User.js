const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  pickups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pickup' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
