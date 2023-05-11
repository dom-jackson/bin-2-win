const mongoose = require('mongoose');
const { Schema } = mongoose;

const pickupSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  address: { type: String, required: true },
  recycle_material: { type: String, required: true },
  weight: { type: Number, required: true },
  phone_number: { type: String, required: true },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Pickup = mongoose.model('Pickup', pickupSchema);

module.exports = Pickup;
