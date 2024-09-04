const mongoose = require('mongoose');

const formData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  inquiry: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const formDataModel = mongoose.model('formData', formData)
module.exports = formDataModel
