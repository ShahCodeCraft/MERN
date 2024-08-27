// models/Address.js
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
