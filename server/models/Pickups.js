const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  address: { type: String, required: true },
  recycle_material: { type: String, required: true },
  phone_number: { type: String, required: true },
});

const Pickup = mongoose.model('Pickup', pickupSchema);

module.exports = Pickup;
