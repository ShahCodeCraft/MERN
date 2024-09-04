// import React, { useState } from 'react';

// const ConsultancyForm = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleForm = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-100">
//       {/* Feedback Button */}
//       <button
//         onClick={toggleForm}
//         className="fixed right-0 top-1/2 transform -translate-y-1/2 -rotate-90 bg-blue-600 text-white px-4 py-2 rounded-r-lg shadow-lg hover:bg-blue-700"
//       >
//         Feedback
//       </button>

//       {/* Full-Screen Container */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="relative flex flex-col md:flex-row bg-white w-full h-full md:h-auto md:max-w-4xl rounded-xl shadow-lg overflow-hidden">
//             {/* Close Button */}
//             <button
//               onClick={toggleForm}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-50"
//             >
//               &#10005;
//             </button>

//             {/* Left Section with Image */}
//             <div className="hidden md:block w-full md:w-1/2 bg-blue-500">
//               <img
//                 src="https://softxai.com/assets/img/about/superman_3d.png"
//                 alt="Consultancy"
//                 className="w-full h-full object-scale-down"
//               />
//             </div>

//             {/* Right Section with Form */}
//             <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
//               <div className="w-full">
//                 <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-800 mb-6">
//                   Request Free Consultancy
//                 </h2>

//                 <form className="space-y-4">
//                   <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//                     <input
//                       type="text"
//                       placeholder="Name *"
//                       className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     />
//                     <input
//                       type="email"
//                       placeholder="Email Address *"
//                       className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     />
//                   </div>

//                   <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
//                     <option>Our Services</option>
//                     <option>Technology</option>
//                     <option>Cloud Services</option>
//                     <option>IT Consultation</option>
//                     <option>Digital Marketing</option>
//                   </select>

//                   <textarea
//                     placeholder="Write your inquiry here"
//                     rows="4"
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   ></textarea>

//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-4 w-4 text-blue-600"
//                     />
//                     <span>
//                       By submitting, I'm agreeing to the{' '}
//                       <a href="#" className="text-blue-600 underline">
//                         Terms & Conditions
//                       </a>
//                     </span>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
//                   >
//                     Request Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConsultancyForm;



import React, { useState } from 'react';
import axios from 'axios';
import SummaryApi from '../common'
import { FcFeedback } from "react-icons/fc";
import contact_globe from "../assest/contact_globe.svg"

const ConsultancyForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    inquiry: ''
  });

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Send form data to backend API
  //     const response = await axios.post(SummaryApi.feedBack.url);
  //     alert(response.data.message);

  //     // Reset form data
  //     setFormData({
  //       name: '',
  //       email: '',
  //       service: '',
  //       inquiry: ''
  //     });

  //     // Toggle form visibility
  //     toggleForm();
  //   } catch (err) {
  //     console.error('Error submitting form:', err);
  //     alert('An error occurred while submitting the form.');
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Send form data to backend API
        const response = await fetch(SummaryApi.feedBack.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Parse the response data
        const responseData = await response.json();

        // Handle success or failure
        if (responseData.success) {
            alert(responseData.message);

            // Reset form data
            setFormData({
                name: '',
                email: '',
                service: '',
                inquiry: ''
            });

            // Toggle form visibility
            toggleForm();
        } else {
            alert('An error occurred: ' + responseData.message);
        }
    } catch (err) {
        console.error('Error submitting form:', err);
        alert('An error occurred while submitting the form.');
    }
};


  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Feedback Button */}
      <button
        onClick={toggleForm}
        className="fixed -right-10 top-1/2 transform -translate-y-1/2 -rotate-90 bg-blue-600 text-white px-3 py-1  rounded-r-lg shadow-lg hover:bg-blue-700 flex gap-2 z-50"
      >
        Feedback <FcFeedback className='mt-1' />

      </button>

      {/* Full-Screen Container */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative flex flex-col md:flex-row bg-white w-full h-full md:h-auto md:max-w-4xl rounded-xl shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-50"
            >
              &#10005;
            </button>

            {/* Left Section with Image */}

            {/* <div className="relative hidden md:block w-full md:w-1/2 bg-blue-500 bg-center bg-no-repeat bg-cover rotating-bg bg-rotate-wrapper" >
              <img
                src="https://softxai.com/assets/img/about/superman_3d.png"
                alt="Consultancy"
                className="w-full h-full object-scale-down"
              />
              
            </div> */}
            <div className="relative hidden md:block w-full md:w-1/2 bg-blue-500 bg-center bg-no-repeat bg-cover rotating-bg bg-rotate-wrapper">
  <div className="absolute inset-0 rotate-image">
    <img
      src={contact_globe}
      alt="Rotating Background"
      className="w-full h-full object-cover p-4"
    />
  </div>
  <img
    src="https://softxai.com/assets/img/about/superman_3d.png"
    alt="Consultancy"
    className="w-full h-full object-scale-down relative z-10"
  />
</div>


            {/* Right Section with Form */}
            <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              <div className="w-full ">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
                  Request Free Consultancy
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name *"
                      className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Our Services</option>
                    <option value="Technology">Technology</option>
                    <option value="Cloud Services">Cloud Services</option>
                    <option value="IT Consultation">IT Consultation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>

                  <textarea
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    placeholder="Write your inquiry here"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  ></textarea>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span>
                      By submitting, I'm agreeing to the{' '}
                      <a href="#" className="text-blue-600 underline">
                        Terms & Conditions
                      </a>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
                  >
                    Request Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultancyForm;

