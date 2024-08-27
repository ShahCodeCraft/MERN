// const stripe = require('../../config/stripe')
// const userModel = require('../../models/userModel')

// const paymentController = async(request,response)=>{
//     try {
//         const { cartItems } = request.body

//         const user = await userModel.findOne({ _id : request.userId })

//         const params = {
//             submit_type : 'pay',
//             mode : "payment",
//             payment_method_types : ['card'],
//             billing_address_collection : 'auto',
//             shipping_options : [
//                 {
//                     shipping_rate : 'shr_1PMkhpSAq8kJSdzM64YIpKFo'
//                 }
//             ],
//             customer_email : user.email,
//             metadata : {
//                 userId : request.userId
//             },
//             line_items : cartItems.map((item,index)=>{
//                 return{
//                     price_data : {
//                       currency : 'inr',
//                       product_data : {
//                         name : item.productId.productName,
//                         images : item.productId.productImage,
//                         metadata : {
//                             productId : item.productId._id
//                         }
//                       },
//                       unit_amount : item.productId.sellingPrice * 100
//                     },
//                     adjustable_quantity : {
//                         enabled : true,
//                         minimum : 1
//                     },
//                     quantity : item. quantity

//                 }
//             }),
//             success_url : `${process.env.FRONTEND_URL}/success`,
//             cancel_url : `${process.env.FRONTEND_URL}/cancel`,
//         }

//         const session = await stripe.checkout.sessions.create(params)

//         response.status(303).json(session)

//     } catch (error) {
//         response.json({
//             message : error?.message || error,
//             error : true,
//             success : false
//         })
//     }
// }

// module.exports = paymentController





const Razorpay = require('razorpay');
const userModel = require('../../models/userModel');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const paymentController = async (request, response) => {
    try {
        const { cartItems } = request.body;

        const user = await userModel.findOne({ _id: request.userId });

        // Calculate total amount in smallest currency unit (paisa)
        const totalAmount = cartItems.reduce((total, item) => {
            return total + (item.productId.sellingPrice * item.quantity * 100);
        }, 0);

        // Create an order in Razorpay
        const options = {
            amount: totalAmount,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            payment_capture: 1, // Auto-capture the payment
        };

        const order = await razorpay.orders.create(options);

        // Send the order information and other details back to the frontend
        response.status(200).json({
            id: order.id,
            currency: order.currency,
            amount: order.amount,
            key_id: process.env.RAZORPAY_KEY_ID,
            name: user.name,
            email: user.email,
            contact: user.contact,
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        });
    } catch (error) {
        response.status(500).json({
            message: error?.message || error,
            error: true,
            success: false,
        });
    }
};

module.exports = paymentController;

