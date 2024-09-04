// // src/pages/About.jsx
// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="text-center transform transition duration-700 ease-out opacity-0 animate-fadeInUp">
//         <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
//           Welcome to Our Store!
//         </h1>
//         <p className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto">
//           At our eCommerce store, we believe in delivering the best products
//           with a seamless shopping experience. Discover our wide range of
//           products and enjoy exclusive deals tailored just for you.
//         </p>
//       </div>

//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Example of a 3D card effect */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-y-12 hover:shadow-2xl">
//           <img
//             className="w-full h-56 object-cover"
//             src="https://www.mikevents.in/images/mission.jpg"
//             alt="Product 1"
//           />
//           <div className="p-6">
//             <h3 className="text-lg font-semibold">Our Mission</h3>
//             <p className="mt-2 text-gray-600">
//               To provide top-notch products and exceptional customer service
//               that exceeds your expectations.
//             </p>
//           </div>
//         </div>

//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-y--12 hover:shadow-2xl">
//           <img
//             className="w-full h-56 object-cover"
//             src="https://vivanls.com/images/pageimages/one-ourvision-1576152691.jpg"
//             alt="Product 2"
//           />
//           <div className="p-6">
//             <h3 className="text-lg font-semibold">Our Vision</h3>
//             <p className="mt-2 text-gray-600">
//               To be the leading eCommerce platform that brings happiness to your
//               doorstep, one product at a time.
//             </p>
//           </div>
//         </div>

//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-y-12 hover:shadow-2xl">
//           <img
//             className="w-full h-56 object-cover"
//             src="https://www.shutterstock.com/image-photo/hand-writing-sign-our-values-260nw-2246635285.jpg"
//             alt="Product 3"
//           />
//           <div className="p-6">
//             <h3 className="text-lg font-semibold">Our Values</h3>
//             <p className="mt-2 text-gray-600">
//               Integrity, quality, and customer satisfaction are at the heart of
//               everything we do.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Welcome to Our Store!
        </motion.h1>
        <motion.p
          className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          At our eCommerce store, we believe in delivering the best products
          with a seamless shopping experience. Discover our wide range of
          products and enjoy exclusive deals tailored just for you.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Example of a 3D card effect */}
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          whileHover={{ rotateY: 20 }}
        >
          <img
            className="w-full h-56 object-cover"
            src="https://via.placeholder.com/300"
            alt="Product 1"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To provide top-notch products and exceptional customer service
              that exceeds your expectations.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          whileHover={{ rotateY: -20 }}
        >
          <img
            className="w-full h-56 object-cover"
            src="https://via.placeholder.com/300"
            alt="Product 2"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To be the leading eCommerce platform that brings happiness to your
              doorstep, one product at a time.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          whileHover={{ rotateY: 20 }}
        >
          <img
            className="w-full h-56 object-cover"
            src="https://via.placeholder.com/300"
            alt="Product 3"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold">Our Values</h3>
            <p className="mt-2 text-gray-600">
              Integrity, quality, and customer satisfaction are at the heart of
              everything we do.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

