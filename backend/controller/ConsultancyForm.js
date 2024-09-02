const express = require('express');
const router = express.Router();
const consultancyForm = require('../models/consultancyForm');

// POST route to handle form submission
async function ConsultancyForm (req, res){
  try {
    const { name, email, service, inquiry } = req.body;
    
    // Create new form data entry
    const FormData = new consultancyForm({
      name,
      email,
      service,
      inquiry,
    });

    // Save to the database
    await FormData.save();
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving form data' });
  }
};

module.exports = ConsultancyForm;
