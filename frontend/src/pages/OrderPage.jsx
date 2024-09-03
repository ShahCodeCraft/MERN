// import React, { useEffect, useState } from 'react'
// import SummaryApi from '../common'
// import moment from 'moment'
// import displayINRCurrency from '../helpers/displayCurrency'

// const OrderPage = () => {
//   const [data,setData] = useState([])

//   const fetchOrderDetails = async()=>{
//     const response = await fetch(SummaryApi.getOrder.url,{
//       method : SummaryApi.getOrder.method,
//       credentials : 'include'
//     })

//     const responseData = await response.json()

//     setData(responseData.data)
//     console.log("order list",responseData)
//   }

//   useEffect(()=>{
//     fetchOrderDetails()
//   },[])

//   return (
//     <div>
//       {
//          !data[0] && (
//           <p>No Order available</p>
//          )
//       }

//       <div className='p-4 w-full'>
//           {
//             data.map((item,index)=>{
//               return(
//                 <div key={item.userId+index}>
//                    <p className='font-medium text-lg '>{moment(item.createdAt).format('LL')}</p> 
//                    <div className='border rounded-md'>
//                         <div className='flex flex-col lg:flex-row justify-between'>
//                             <div className='grid gap-1'>
//                               {
//                                 item?.productDetails.map((product,index)=>{
//                                   return(
//                                     <div key={product.productId+index} className='flex  gap-3 text-gray-900 dark:text-gray-100'>
//                                         <img 
//                                           src={product.image[0]}
//                                           className='w-28 h-28 bg-slate-200 object-scale-down p-2 dark:bg-slate-700'
//                                         />
//                                         <div>
//                                           <div className='font-medium text-lg text-ellipsis line-clamp-1'>{product.name}</div>
//                                           <div className='flex items-center gap-5 mt-1'>
//                                             <div className='text-lg text-red-500'>{displayINRCurrency(product.price)}</div>
//                                             <p>Quantity : {product.quantity}</p>
//                                           </div>
//                                         </div>
//                                     </div>
//                                   )
//                                 })
//                               }
//                             </div>
//                             <div className='flex flex-col gap-4 p-2 min-w-[300px]'>
//                               <div>
//                                   <div className='text-lg font-medium'>Payment Details : </div>
//                                   <p className=' ml-1'>Payment method : {item.paymentDetails.payment_method_type[0]}</p>
//                                   <p className=' ml-1'>Payment Status : {item.paymentDetails.payment_status}</p>
//                               </div>
//                               <div>
//                                 <div className='text-lg font-medium'>Shipping Details :</div>
//                                 {
//                                   item.shipping_options.map((shipping,index)=>{
//                                     return(
//                                       <div key={shipping.shipping_rate} className=' ml-1'>
//                                         Shipping Amount : {shipping.shipping_amount}
//                                       </div>
//                                     )
//                                   })                      
//                                 }
//                               </div>
//                             </div>
//                         </div>
//                         <hr/>
//                       <div className='font-semibold ml-auto w-fit lg:text-lg'>
//                         Total Amount : {item.totalAmount}
//                       </div>
//                    </div>
//                 </div>
//               )
//             })
//           }
//       </div>
//     </div>
//   )
// }

// export default OrderPage


import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import moment from 'moment';
import displayINRCurrency from '../helpers/displayCurrency';

const OrderPage = () => {
  const [data, setData] = useState([]);

  const fetchOrderDetails = async () => {
    const response = await fetch(SummaryApi.getOrder.url, {
      method: SummaryApi.getOrder.method,
      credentials: 'include'
    });

    const responseData = await response.json();

    setData(responseData.data);
    console.log("order list", responseData);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-950 min-h-screen">
      {!data[0] && (
        <p className="text-center text-xl text-gray-600 dark:text-gray-400">No Orders Available</p>
      )}

      <div className="space-y-6 max-h-screen overflow-y-auto p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
        {data.map((item, index) => (
          <div key={item.userId + index} className="bg-gray-100 dark:bg-gray-800 shadow-2xl rounded-lg p-4">
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Order Date: {moment(item.createdAt).format('LL')}
            </p>
            <div className="border-t mt-2 pt-4">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="flex-1 overflow-y-auto max-h-96">
                  {item?.productDetails.map((product, index) => (
                    <div key={product.productId + index} className="flex gap-4 mb-4">
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-32 h-32 bg-gray-200 dark:bg-slate-800 object-contain p-2 rounded-lg"
                      />
                      <div className="flex-1">
                        <div className='font-medium text-lg text-gray-800 dark:text-gray-200 line-clamp-1'>{product.name}</div>
                        <div className='flex items-center gap-5 mt-1'>
                          <div className='text-lg text-red-500'>{displayINRCurrency(product.price)}</div>
                          <p>Quantity: {product.quantity}</p>
                        </div>
                        <div className="flex items-center py-3">
                          <div className="flex space-x-1 text-yellow-500">
                            <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">Rating:</span>
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                fill={i < 4 ? "currentColor" : "none"}
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p><span className='font-semibold'>Description:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, deleniti.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Payment Details:</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Payment Method: {item.paymentDetails.payment_method_type[0]}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Payment Status: {item.paymentDetails.payment_status}</p>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Shipping Details:</div>
                    {item.shipping_options.map((shipping, index) => (
                      <div key={shipping.shipping_rate} className="text-sm text-gray-600 dark:text-gray-300">
                        Shipping Amount: <span className='bg-red-400 text-white rounded-md py-0.5 px-2'>{displayINRCurrency(shipping.shipping_amount)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="font-semibold text-lg text-right mt-4">
                Total Amount: <span className='bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 p-1 rounded-md'>{displayINRCurrency(item.totalAmount)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
