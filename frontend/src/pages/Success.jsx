import React from 'react'
import SUCCESSIMAGE from '../assest/success.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
      <img
        src={SUCCESSIMAGE}
        width={150}
        height={150}
      />
      <p className='text-green-600 font-bold text-xl'>Payment Successfully</p>
      <Link to={"/order"} className='p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>See Order</Link>
    </div>
  )
}

export default Success




// src/components/Success.jsx

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom'; 
// import { BsBagCheckFill } from 'react-icons/bs';

// import { useStateContext } from '../context/StateContext';
// import { runFireworks } from '../lib/utils';

// const Success = () => {
//   const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
//   useEffect(() => {
//     // Clear local storage and reset context values
//     localStorage.clear();
//     setCartItems([]);
//     setTotalPrice(0);
//     setTotalQuantities(0);
    
//     // Trigger fireworks effect
//     runFireworks();
//   }, [setCartItems, setTotalPrice, setTotalQuantities]);

//   return (
//     <div className="success-wrapper">
//       <div className="success">
//         <p className="icon">
//           <BsBagCheckFill />
//         </p>
//         <h2>Thank you for your order!</h2>
//         <p className="email-msg">Check your email inbox for the receipt.</p>
//         <p className="description">
//           If you have any questions, please email
//           <a className="email" href="mailto:order@example.com">
//             order@example.com
//           </a>
//         </p>
//         <Link to="/">
//           <button type="button" className="btn" style={{ width: '300px' }}>
//             Continue Shopping
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Success;