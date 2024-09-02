// import React, { useContext, useEffect, useState } from 'react';
// import SummaryApi from '../common';
// import Context from '../context';
// import displayINRCurrency from '../helpers/displayCurrency';
// import { MdDelete } from "react-icons/md";

// const Cart = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const context = useContext(Context);
//     const loadingCart = new Array(4).fill(null);

//     const fetchData = async () => {
//         const response = await fetch(SummaryApi.addToCartProductView.url, {
//             method: SummaryApi.addToCartProductView.method,
//             credentials: 'include',
//             headers: {
//                 "content-type": 'application/json'
//             },
//         });

//         const responseData = await response.json();

//         if (responseData.success) {
//             setData(responseData.data);
//         }
//     };

//     const handleLoading = async () => {
//         await fetchData();
//     };

//     useEffect(() => {
//         setLoading(true);
//         handleLoading();
//         setLoading(false);
//     }, []);

//     const increaseQty = async (id, qty) => {
//         const response = await fetch(SummaryApi.updateCartProduct.url, {
//             method: SummaryApi.updateCartProduct.method,
//             credentials: 'include',
//             headers: {
//                 "content-type": 'application/json'
//             },
//             body: JSON.stringify({
//                 _id: id,
//                 quantity: qty + 1
//             })
//         });

//         const responseData = await response.json();

//         if (responseData.success) {
//             fetchData();
//         }
//     };

//     const decraseQty = async (id, qty) => {
//         if (qty >= 2) {
//             const response = await fetch(SummaryApi.updateCartProduct.url, {
//                 method: SummaryApi.updateCartProduct.method,
//                 credentials: 'include',
//                 headers: {
//                     "content-type": 'application/json'
//                 },
//                 body: JSON.stringify({
//                     _id: id,
//                     quantity: qty - 1
//                 })
//             });

//             const responseData = await response.json();

//             if (responseData.success) {
//                 fetchData();
//             }
//         }
//     };

//     const deleteCartProduct = async (id) => {
//         const response = await fetch(SummaryApi.deleteCartProduct.url, {
//             method: SummaryApi.deleteCartProduct.method,
//             credentials: 'include',
//             headers: {
//                 "content-type": 'application/json'
//             },
//             body: JSON.stringify({
//                 _id: id,
//             })
//         });

//         const responseData = await response.json();

//         if (responseData.success) {
//             fetchData();
//             context.fetchUserAddToCart();
//         }
//     };


//     const handlePayment = async () => {
//         const script = document.createElement('script');
//         script.src = "https://checkout.razorpay.com/v1/checkout.js";
//         script.async = true;
//         document.body.appendChild(script);
    
//         script.onload = async () => {
//             try {
//                 console.log("Razorpay script loaded successfully.");
    
//                 // Step 1: Create the order and get the payment details
//                 const response = await fetch(SummaryApi.payment.url, {
//                     method: SummaryApi.payment.method,
//                     credentials: 'include',
//                     headers: {
//                         "content-type": 'application/json'
//                     },
//                     body: JSON.stringify({
//                         cartItems: data
//                     })
//                 });
    
//                 const responseData = await response.json();
//                 console.log("Payment API response: ", responseData);
    
//                 if (responseData?.id) {  // Backend response should include order ID and other details
//                     const options = {
//                         key: responseData.key_id, // API Key from backend
//                         amount: responseData.amount, // Amount in paise
//                         currency: 'INR',
//                         name: responseData.name || 'Your Company Name',
//                         description: 'Order Description',
//                         order_id: responseData.id, // Backend-generated order ID
//                         handler: async function (paymentResponse) {
//                             console.log('Payment Successful', paymentResponse);
    
//                             // Step 2: Fetch payment details using the payment ID returned from the handler
//                             const fetchPaymentResponse = await fetch('/fetch-payment', {
//                                 method: 'POST',
//                                 headers: {
//                                     'Content-Type': 'application/json',
//                                 },
//                                 body: JSON.stringify({ paymentId: paymentResponse.razorpay_payment_id }),
//                             });
    
//                             const paymentDetails = await fetchPaymentResponse.json();
//                             console.log("Fetched Payment Details: ", paymentDetails);
    
//                             // You can now handle the payment details, e.g., updating your database or showing a success message
//                         },
//                         prefill: {
//                             name: responseData.name || 'Customer Name',
//                             email: responseData.email || 'customer@example.com',
//                             contact: responseData.contact || '9999999999'
//                         },
//                         notes: {
//                             address: 'Customer Address'
//                         },
//                         theme: {
//                             color: '#F37254'
//                         }
//                     };
    
//                     const rzp = new window.Razorpay(options);
//                     rzp.open();
//                 } else {
//                     console.error('Failed to create order');
//                 }
//             } catch (error) {
//                 console.error('Error during payment process', error);
//             }
//         };
    
//         script.onerror = () => {
//             console.error("Failed to load Razorpay script");
//         };
//     };
    
    
    

//     const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
//     const totalPrice = data.reduce((preve, curr) => preve + (curr.quantity * curr?.productId?.sellingPrice), 0);

//     return (
//         <div className='container mx-auto'>
//             <div className='text-center text-lg my-3'>
//                 {data.length === 0 && !loading && (
//                     <p className='bg-white py-5'>No Data</p>
//                 )}
//             </div>

//             <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
//                 {/* View product */}
//                 <div className='w-full max-w-3xl'>
//                     {loading ? (
//                         loadingCart?.map((el, index) => (
//                             <div key={el + "Add To Cart Loading" + index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>
//                             </div>
//                         ))
//                     ) : (
//                         data.map((product, index) => (
//                             <div key={product?._id + "Add To Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'>
//                                 <div className='w-32 h-32 bg-slate-200'>
//                                     <img src={product?.productId?.productImage[0]} className='w-full h-full object-scale-down mix-blend-multiply' />
//                                 </div>
//                                 <div className='px-4 py-2 relative'>
//                                     {/* Delete product */}
//                                     <div className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer' onClick={() => deleteCartProduct(product?._id)}>
//                                         <MdDelete />
//                                     </div>

//                                     <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
//                                     <p className='capitalize text-slate-500'>{product?.productId.category}</p>
//                                     <div className='flex items-center justify-between'>
//                                         <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p>
//                                         <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.sellingPrice * product?.quantity)}</p>
//                                     </div>
//                                     <div className='flex items-center gap-3 mt-1'>
//                                         <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={() => decraseQty(product?._id, product?.quantity)}>-</button>
//                                         <span>{product?.quantity}</span>
//                                         <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={() => increaseQty(product?._id, product?.quantity)}>+</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>

//                 {/* Summary */}
//                 {data[0] && (
//                     <div className='mt-5 lg:mt-0 w-full max-w-sm'>
//                         {loading ? (
//                             <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'>
//                             </div>
//                         ) : (
//                             <div className='h-36 bg-white'>
//                                 <h2 className='text-white bg-red-600 px-4 py-1'>Summary</h2>
//                                 <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
//                                     <p>Quantity</p>
//                                     <p>{totalQty}</p>
//                                 </div>
//                                 <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
//                                     <p>Total Price</p>
//                                     <p>{displayINRCurrency(totalPrice)}</p>
//                                 </div>
//                                 <button className='bg-blue-600 p-2 text-white w-full mt-2' onClick={handlePayment}>Payment</button>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Cart;


import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../common'
import Context from '../context'
import displayINRCurrency from '../helpers/displayCurrency'
import { MdDelete } from "react-icons/md";

const useRazorpay = () => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    }, []);
  
    return isLoaded;
  };


const Cart = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const context = useContext(Context)
    const loadingCart = new Array(4).fill(null)

    const isRazorpayLoaded = useRazorpay();

    const handlePayment = async () => {
      if (!isRazorpayLoaded) {
        alert('Razorpay SDK is loading, please wait.');
        return;
      }
  
      const response = await fetch(SummaryApi.payment.url, {
        method: SummaryApi.payment.method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems: data,
        }),
      });
  
      const responseData = await response.json();
      
      console.log("Payment Response",responseData)
  
      if (responseData?.id) {
        const options = {
          key: responseData.key_id,
          amount: responseData.amount,
          currency: responseData.currency,
          name: responseData.name,
          description: 'Order Payment',
          order_id: responseData.id,
          handler: function (response) {
            alert('Payment Successful');
            window.location.href = '/success';
          },
          prefill: {
            name: responseData.name,
            email: responseData.email,
          },
          notes: {
            address: 'Razorpay Corporate Office',
          },
          theme: {
            color: '#3399cc',
          },
        };
  
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
  
        razorpayInstance.on('payment.failed', function (response) {
          alert('Payment Failed');
          window.location.href = '/cancel';
        });

        
      }
    };
  


    const fetchData = async() =>{
        
        const response = await fetch(SummaryApi.addToCartProductView.url,{
            method : SummaryApi.addToCartProductView.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
        })
       

        const responseData = await response.json()

        if(responseData.success){
            setData(responseData.data)
        }


    }

    const handleLoading = async() =>{
        await fetchData()
    }

    useEffect(()=>{
         setLoading(true)
         handleLoading()
         setLoading(false)
    },[])


    const increaseQty = async(id,qty) =>{
        const response = await fetch(SummaryApi.updateCartProduct.url,{
            method : SummaryApi.updateCartProduct.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
            body : JSON.stringify(
                {   
                    _id : id,
                    quantity : qty + 1
                }
            )
        })

        const responseData = await response.json()


        if(responseData.success){
            fetchData()
        }
    }


    const decraseQty = async(id,qty) =>{
       if(qty >= 2){
            const response = await fetch(SummaryApi.updateCartProduct.url,{
                method : SummaryApi.updateCartProduct.method,
                credentials : 'include',
                headers : {
                    "content-type" : 'application/json'
                },
                body : JSON.stringify(
                    {   
                        _id : id,
                        quantity : qty - 1
                    }
                )
            })

            const responseData = await response.json()


            if(responseData.success){
                fetchData()
            }
        }
    }

    const deleteCartProduct = async(id)=>{
        const response = await fetch(SummaryApi.deleteCartProduct.url,{
            method : SummaryApi.deleteCartProduct.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
            body : JSON.stringify(
                {   
                    _id : id,
                }
            )
        })

        const responseData = await response.json()

        if(responseData.success){
            fetchData()
            context.fetchUserAddToCart()
        }
    }


    const totalQty = data.reduce((previousValue,currentValue)=> previousValue + currentValue.quantity,0)
    const totalPrice = data.reduce((preve,curr)=> preve + (curr.quantity * curr?.productId?.sellingPrice) ,0)
  return (
    <div className='container mx-auto'>
        
        <div className='text-center text-lg my-3'>
            {
                data.length === 0 && !loading && (
                    <p className='bg-white py-5'>No Data</p>
                )
            }
        </div>

        <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>   
                {/***view product */}
                <div className='w-full max-w-3xl'>
                    {
                        loading ? (
                            loadingCart?.map((el,index) => {
                                return(
                                    <div key={el+"Add To Cart Loading"+index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>
                                    </div>
                                )
                            })
                             
                        ) : (
                          data.map((product,index)=>{
                           return(
                            <div key={product?._id+"Add To Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]'>
                                <div className='w-32 h-32 bg-slate-200'>
                                    <img src={product?.productId?.productImage[0]} className='w-full h-full object-scale-down mix-blend-multiply' />
                                </div>
                                <div className='px-4 py-2 relative'>
                                    {/**delete product */}
                                    <div className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer' onClick={()=>deleteCartProduct(product?._id)}>
                                        <MdDelete/>
                                    </div>

                                    <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                                    <p className='capitalize text-slate-500'>{product?.productId.category}</p>
                                    <div className='flex items-center justify-between'>
                                            <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p>
                                            <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.sellingPrice  * product?.quantity)}</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-1'>
                                        <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={()=>decraseQty(product?._id,product?.quantity)}>-</button>
                                        <span>{product?.quantity}</span>
                                        <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={()=>increaseQty(product?._id,product?.quantity)}>+</button>
                                    </div>
                                </div>    
                            </div>
                           )
                          })
                        )
                    }
                </div>


                {/***summary  */}
                {
                    data[0] && (
                        <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                        {
                            loading ? (
                            <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'>
                                
                            </div>
                            ) : (
                                <div className='h-36 bg-white'>
                                    <h2 className='text-white bg-red-600 px-4 py-1'>Summary</h2>
                                    <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                        <p>Quantity</p>
                                        <p>{totalQty}</p>
                                    </div>

                                    <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                        <p>Total Price</p>
                                        <p>{displayINRCurrency(totalPrice)}</p>    
                                    </div>

                                    <button className='bg-blue-600 p-2 text-white w-full mt-2' onClick={handlePayment}>Checkout</button>

                                </div>
                            )
                        }
                        </div>
                    )
                }
                
        </div>
    </div>
  )
}

export default Cart