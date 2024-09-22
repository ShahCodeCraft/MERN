import React, { useEffect } from "react";
import Fanta1 from "../assest/products/airpodes/boAtAirdopes111.webp";
import Fanta2 from "../assest/products/watches/boAtStormCall1.webp";
import Fanta3 from "../assest/products/earphones/boAtRockerz510.webp";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { Link } from 'react-router-dom'

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Fanta3,
    title: "Earphone",
    subtitle:
      "Headphones are larger devices immersive sound, great for music and gaming, and earphones are fitting directly in the ear for portable, casual listening.",
    price: "₹1299",
    sprice: "₹799",
    modal: "Earph",
    bgColor: "#2C3E50",
    order: "/product-category?category=earphones"
  },
  {
    id: 2,
    image: Fanta2,
    title: "Watch",
    subtitle:
      "An electronic timepiece with a clear digital display. It offers features like alarms, timers, and backlighting, making it both stylish and practical for everyday use.",
    price: "₹1699",
    sprice: "₹999",
    modal: "Watch",
    bgColor: "#2C3E50",
    order: "/product-category?category=watches"
  },
  {
    id: 3,
    image: Fanta1,
    title: "Airpodes",
    subtitle:
      "True wireless earbuds with immersive sound, seamless Bluetooth connectivity, long battery life, and a comfortable fit. Perfect for music, calls, and workouts.",
    price: "₹999",
    sprice: "₹699",
    modal: "Pods",
    bgColor: "#2C3E50",
    order: "/product-category?category=airpodes"
  },
 
];

const BannerProduct = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveData((prevData) => {
        const nextIndex = (headphoneData.findIndex(item => item.id === prevData.id) + 1) % headphoneData.length;
        return headphoneData[nextIndex];
      });
    }, 5000); // Change the product every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <motion.section
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
      className="bg-brandDark text-white px-3 overflow-hidden"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* ______ Headphone Info ______ */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 10,
                }}
              >
                <motion.h1
                  key={activeData.id}
                  variants={SlideRight(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow sm:mt-0 -mt-10"
                >
                  {activeData.title}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id}
                variants={SlideRight(0.4)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeData.bgColor,
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  scale: 6,
                  backgroundElement: (
                    <div>
                      <img src={activeData.image} />
                    </div>
                  ),
                }}
              >
                <motion.button
                  key={activeData.id}
                  variants={SlideRight(0.6)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{ color: activeData.bgColor }}
                  className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
                >
                  <Link to={activeData.order}>Order Now</Link>
                </motion.button>
              </UpdateFollower>
            </AnimatePresence>

            {/* ______ Headphone List Separator ______ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
            >
              <div className="w-20 h-[1px] bg-white"></div>
              <p className="uppercase text-sm">Top Recommendation</p>
              <div className="w-20 h-[1px] bg-white"></div>
            </motion.div>

            {/* Headphone list switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-10"
            >
              {headphoneData.map((item) => (
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: item.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 5,
                    text: "View Details",
                    textFontSize: "3px",
                  }}
                  key={item.id}
                >
                  <div
                    onClick={() => handleActiveData(item)}
                    className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                  >
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt=""
                        className={`w-[80px] img-shadow ${
                          activeData.image === item.image
                            ? "opacity-100 scale-110"
                            : "opacity-50"
                        }`}
                      />
                    </div>
                    <div className="!mt-6 space-y-1 text-center">
                      <p className="text-base line-through opacity-50">
                        {item.price}
                      </p>
                      <p className="text-xl font-bold">{item.sprice}</p>
                    </div>
                  </div>
                </UpdateFollower>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ______ Hero Image ______ */}
        <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
              exit={{
                opacity: 0,
                x: -100,
                transition: {
                  duration: 0.4,
                },
              }}
              src={activeData.image}
              alt=""
              className="w-[25vh] sm:w-[60vh] img-shadow relative z-10"
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.4,
                },
              }}
              className="text-white/5 text-[300px] font-poppins font-extrabold absolute bottom-0 right-0 pointer-events-none"
            >
              {activeData.modal}
            </motion.div>
          </AnimatePresence>
        </div>

         {/* ______ WhatsApp Icon ______ */}
           <div className="hidden sm:block text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
             <a href="https://chat.whatsapp.com/GO0A7wzl1iM3syWymxDCBN">
               <FaWhatsapp />
             </a>
           </div>

      </div>
    </motion.section>
  );
};

export default BannerProduct;



// import React, { useEffect } from "react";
// import Fanta1 from "../assest/products/airpodes/boAtAirdopes111.webp";
// import Fanta2 from "../assest/products/watches/boAtStormCall1.webp";
// import Fanta3 from "../assest/products/earphones/boAtRockerz510.webp";
// import { FaWhatsapp } from "react-icons/fa";
// import { UpdateFollower } from "react-mouse-follower";
// import { AnimatePresence, easeInOut, motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const SlideRight = (delay) => {
//   return {
//     hidden: {
//       opacity: 0,
//       x: 100,
//     },
//     show: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         delay: delay,
//         ease: easeInOut,
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: -50,
//       transition: {
//         duration: 0.2,
//         ease: easeInOut,
//       },
//     },
//   };
// };

// const headphoneData = [
//   {
//     id: 1,
//     image: Fanta3,
//     title: "Earphone",
//     subtitle:
//       "Headphones are larger devices immersive sound, great for music and gaming, and earphones are fitting directly in the ear for portable, casual listening.",
//     price: "₹1299",
//     sprice: "₹799",
//     modal: "Earph",
//     bgColor: "#2C3E50",
//     order: "/product-category?category=earphones",
//   },
//   {
//     id: 2,
//     image: Fanta2,
//     title: "Watch",
//     subtitle:
//       "An electronic timepiece with a clear digital display. It offers features like alarms, timers, and backlighting, making it both stylish and practical for everyday use.",
//     price: "₹1699",
//     sprice: "₹999",
//     modal: "Watch",
//     bgColor: "#2C3E50",
//     order: "/product-category?category=watches",
//   },
//   {
//     id: 3,
//     image: Fanta1,
//     title: "Airpodes",
//     subtitle:
//       "True wireless earbuds with immersive sound, seamless Bluetooth connectivity, long battery life, and a comfortable fit. Perfect for music, calls, and workouts.",
//     price: "₹999",
//     sprice: "₹699",
//     modal: "Pods",
//     bgColor: "#2C3E50",
//     order: "/product-category?category=airpodes",
//   },
// ];

// const BannerProduct = () => {
//   const [activeData, setActiveData] = React.useState(headphoneData[0]);

//   const handleActiveData = (data) => {
//     setActiveData(data);
//   };

//   useEffect(() => {
//     // Only change the product within this component and don't affect others
//     const interval = setInterval(() => {
//       setActiveData((prevData) => {
//         const nextIndex = (headphoneData.findIndex((item) => item.id === prevData.id) + 1) % headphoneData.length;
//         return headphoneData[nextIndex];
//       });
//     }, 5000); // Change product every 5 seconds

//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, []);

//   return (
//     <motion.section
//       initial={{ backgroundColor: activeData.bgColor }}
//       animate={{ backgroundColor: activeData.bgColor }}
//       transition={{ duration: 0.8 }}
//       className="bg-brandDark text-white px-3"
//     >
//       <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
//         {/* ______ Headphone Info ______ */}
//         <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
//           <div className="space-y-5 text-center md:text-left">
//             <AnimatePresence mode="wait">
//               <UpdateFollower
//                 mouseOptions={{
//                   backgroundColor: "white",
//                   zIndex: 9999,
//                   followSpeed: 0.5,
//                   rotate: -720,
//                   mixBlendMode: "difference",
//                   scale: 10,
//                 }}
//               >
//                 <motion.h1
//                   key={activeData.id}
//                   variants={SlideRight(0.2)}
//                   initial="hidden"
//                   animate="show"
//                   exit="exit"
//                   className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow sm:mt-0 -mt-10"
//                 >
//                   {activeData.title}
//                 </motion.h1>
//               </UpdateFollower>
//             </AnimatePresence>
//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={activeData.id}
//                 variants={SlideRight(0.4)}
//                 initial="hidden"
//                 animate="show"
//                 exit="exit"
//                 className="text-sm leading-loose text-white/80"
//               >
//                 {activeData.subtitle}
//               </motion.p>
//             </AnimatePresence>

//             <AnimatePresence mode="wait">
//               <UpdateFollower
//                 mouseOptions={{
//                   backgroundColor: activeData.bgColor,
//                   zIndex: 9999,
//                   followSpeed: 0.5,
//                   rotate: -720,
//                   scale: 6,
//                   backgroundElement: (
//                     <div>
//                       <img src={activeData.image} alt="product preview" />
//                     </div>
//                   ),
//                 }}
//               >
//                 <motion.button
//                   key={activeData.id}
//                   variants={SlideRight(0.6)}
//                   initial="hidden"
//                   animate="show"
//                   exit="exit"
//                   style={{ color: activeData.bgColor }}
//                   className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
//                 >
//                   <Link to={activeData.order}>Order Now</Link>
//                 </motion.button>
//               </UpdateFollower>
//             </AnimatePresence>

//             {/* ______ Headphone List Separator ______ */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
//               className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
//             >
//               <div className="w-20 h-[1px] bg-white"></div>
//               <p className="uppercase text-sm">Top Recommendation</p>
//               <div className="w-20 h-[1px] bg-white"></div>
//             </motion.div>

//             {/* Headphone list switcher */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
//               className="grid grid-cols-3 gap-10"
//             >
//               {headphoneData.map((item) => (
//                 <UpdateFollower
//                   mouseOptions={{
//                     backgroundColor: item.bgColor,
//                     zIndex: 9999,
//                     followSpeed: 0.5,
//                     scale: 5,
//                     text: "View Details",
//                     textFontSize: "3px",
//                   }}
//                   key={item.id}
//                 >
//                   <div
//                     onClick={() => handleActiveData(item)}
//                     className="cursor-pointer space-y-3 hover:scale-105 transition-all"
//                   >
//                     <div className="flex justify-center">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className={`w-[80px] img-shadow ${
//                           activeData.image === item.image
//                             ? "opacity-100 scale-110"
//                             : "opacity-50"
//                         }`}
//                       />
//                     </div>
//                     <div className="!mt-6 space-y-1 text-center">
//                       <p className="text-base line-through opacity-50">
//                         {item.price}
//                       </p>
//                       <p className="text-xl font-bold">{item.sprice}</p>
//                     </div>
//                   </div>
//                 </UpdateFollower>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* ______ Hero Image ______ */}
//         <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={activeData.id}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
//               exit={{
//                 opacity: 0,
//                 x: -100,
//                 transition: {
//                   duration: 0.4,
//                 },
//               }}
//               src={activeData.image}
//               alt={activeData.title}
//               className="w-[25vh] sm:w-[60vh] img-shadow relative z-10"
//             />
//           </AnimatePresence>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeData.id}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="absolute bottom-4 sm:bottom-10 right-0 z-0 flex justify-end gap-4 text-2xl text-green-600"
//             >
//               <a
//                 href="https://api.whatsapp.com/send?phone=917972583333&text=I%20want%20to%20buy%20a%20product"
//                 className="text-shadow animate-bounce"
//               >
//                 <FaWhatsapp />
//               </a>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default BannerProduct;
