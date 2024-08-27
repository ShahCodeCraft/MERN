// const Razorpay = require("razorpay")
import Razorpay from "razorpay"

const razorpay = new Razorpay({ 
  key_id: 'rzp_test_5rJjSP025NbQNJ', 
  key_secret: 'vdRdY94COd8gdFIUEL41tRzg' 
})

export const checkout = async (req, res) =>{
  const {amount,cartItems,userShipping,userId} = req.body
  
  razorpay.payments.fetch(paymentId)

  var options = {
    "key": "rzp_test_5rJjSP025NbQNJ", // Enter the Key ID generated from the Dashboard
    "amount": amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}



}
