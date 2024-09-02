// const Razorpay = require('razorpay');
// const crypto = require('crypto');
// const orderModel = require('../../models/orderProductModel');
// const addToCartModel = require('../../models/cartProduct');

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_SECRET_KEY,
// });

// const endpointSecret = process.env.RAZORPAY_WEBHOOK_SECRET_KEY;

// async function getLineItems(orderId) {
//     const order = await razorpay.orders.fetch(orderId);
//     const productItems = [];

//     if (order && order.notes && order.notes.lineItems) {
//         const lineItems = JSON.parse(order.notes.lineItems);
//         for (const item of lineItems) {
//             const productData = {
//                 productId: item.productId,
//                 name: item.name,
//                 price: item.price,
//                 quantity: item.quantity,
//                 image: item.image,
//             };
//             productItems.push(productData);
//         }
//     }

//     return productItems;
// }

// const webhooks = async (request, response) => {
//     const razorpaySignature = request.headers['x-razorpay-signature'];
//     const payloadString = JSON.stringify(request.body);

//     const expectedSignature = crypto
//         .createHmac('sha256', endpointSecret)
//         .update(payloadString)
//         .digest('hex');

//     if (razorpaySignature !== expectedSignature) {
//         return response.status(400).send('Webhook signature verification failed.');
//     }

//     const event = request.body;

//     // Handle the event
//     switch (event.event) {
//         case 'payment.captured':
//             const payment = event.payload.payment.entity;

//             const productDetails = await getLineItems(payment.order_id);

//             const orderDetails = {
//                 productDetails: productDetails,
//                 email: payment.email,
//                 userId: payment.notes.userId,
//                 paymentDetails: {
//                     paymentId: payment.id,
//                     payment_method_type: payment.method,
//                     payment_status: payment.status,
//                 },
//                 shipping_options: JSON.parse(payment.notes.shipping_options),
//                 totalAmount: payment.amount / 100,
//             };

//             const order = new orderModel(orderDetails);
//             const saveOrder = await order.save();

//             if (saveOrder?._id) {
//                 await addToCartModel.deleteMany({ userId: payment.notes.userId });
//             }
//             break;

//         // ... handle other event types
//         default:
//             console.log(`Unhandled event type ${event.event}`);
//     }

//     response.status(200).send();
// };

// module.exports = webhooks;


const Razorpay = require('razorpay');
const crypto = require('crypto');
const orderModel = require('../../models/orderProductModel');
const addToCartModel = require('../../models/cartProduct');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

const endpointSecret = process.env.RAZORPAY_WEBHOOK_SECRET_KEY;

async function getLineItems(orderId) {
    const order = await razorpay.orders.fetch(orderId);
    const productItems = [];

    if (order && order.notes && order.notes.lineItems) {
        const lineItems = JSON.parse(order.notes.lineItems);
        for (const item of lineItems) {
            const productData = {
                productId: item.productId,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image,
            };
            productItems.push(productData);
        }
    }

    return productItems;
}

const webhooks = async (request, response) => {
    try {
        const razorpaySignature = request.headers['x-razorpay-signature'];
        const payloadString = JSON.stringify(request.body);

        const expectedSignature = crypto
            .createHmac('sha256', endpointSecret)
            .update(payloadString)
            .digest('hex');

        if (razorpaySignature !== expectedSignature) {
            return response.status(400).send('Webhook signature verification failed.');
        }

        const event = request.body;

        // Handle the event
        switch (event.event) {
            case 'payment.captured':
                const payment = event.payload.payment.entity;

                const productDetails = await getLineItems(payment.order_id);

                const orderDetails = {
                    productDetails: productDetails,
                    email: payment.email,
                    userId: payment.notes.userId,
                    paymentDetails: {
                        paymentId: payment.id,
                        payment_method_type: payment.method,
                        payment_status: payment.status,
                    },
                    shipping_options: JSON.parse(payment.notes.shipping_options),
                    totalAmount: payment.amount / 100, // Convert from paisa to INR
                };

                const order = new orderModel(orderDetails);
                const saveOrder = await order.save();

                if (saveOrder?._id) {
                    await addToCartModel.deleteMany({ userId: payment.notes.userId });
                }

                response.status(200).send('Order processed and stored successfully');
                break;

            // Handle other event types if necessary
            default:
                console.log(`Unhandled event type ${event.event}`);
                response.status(200).send();
        }
    } catch (error) {
        console.error('Error handling webhook:', error);
        response.status(500).send('Internal Server Error');
    }
};

module.exports = webhooks;
