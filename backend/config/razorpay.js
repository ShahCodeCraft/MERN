const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,        // Your Razorpay key_id
    key_secret: process.env.RAZORPAY_KEY_SECRET // Your Razorpay key_secret
});

module.exports = razorpay;
