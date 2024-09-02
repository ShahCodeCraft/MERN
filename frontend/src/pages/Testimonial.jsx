import "../testimonial.css"
import React, { useRef } from 'react';
// Testimonial data with images
const testimonials = [
  {
    name: "Jack Mandelker",
    position: "CEO at Jack the Printer Company Ink Inc.",
    message:
      "SinaLite is my favorite supplier. The website order system is so excellent. The coroplast signs are very affordable and turnaround times are fast.",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png", // Replace with actual image URL
    borderColors: {
      top: "border-t-blue-500",
      right: "border-r-green-500",
      bottom: "border-b-red-500",
      left: "border-l-yellow-500",
    },
  },
  {
    name: "Cecilia Moreno",
    position: "Creative Manager at MYC Media",
    message:
      "We are very happy with SinaLite. We've been changing different providers until we've found them. We love the quality of the products, they are fast and prices .",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png",
    borderColors: {
      top: "border-t-pink-500",
      right: "border-r-purple-500",
      bottom: "border-b-orange-500",
      left: "border-l-cyan-500",
    },
  },
  {
    name: "Josef Gomez",
    position: "Co-Owner, Sales & Marketing at Allegra",
    message:
      "One of the things we love most about SinaLite are quality products, the turnaround times are fantastic, and the diversity of products. It's a great company, 10 out of 10.",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png",
    borderColors: {
      top: "border-t-indigo-500",
      right: "border-r-teal-500",
      bottom: "border-b-amber-500",
      left: "border-l-lime-500",
    },
  },
  {
    name: "Josef Gomez",
    position: "Co-Owner, Sales & Marketing at Allegra",
    message:
      "One of the things we love most about SinaLite are quality products, the turnaround times are fantastic, and the diversity of products. It's a great company, 10 out of 10.",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png",
    borderColors: {
      top: "border-t-indigo-500",
      right: "border-r-teal-500",
      bottom: "border-b-amber-500",
      left: "border-l-lime-500",
    },
  },
  {
    name: "Josef Gomez",
    position: "Co-Owner, Sales & Marketing at Allegra",
    message:
      "One of the things we love most about SinaLite are quality products, the turnaround times are fantastic, and the diversity of products. It's a great company, 10 out of 10.",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png",
    borderColors: {
      top: "border-t-indigo-500",
      right: "border-r-teal-500",
      bottom: "border-b-amber-500",
      left: "border-l-lime-500",
    },
  },
  {
    name: "Josef Gomez",
    position: "Co-Owner, Sales & Marketing at Allegra",
    message:
      "One of the things we love most about SinaLite are quality products, the turnaround times are fantastic, and the diversity of products. It's a great company, 10 out of 10.",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png",
    borderColors: {
      top: "border-t-indigo-500",
      right: "border-r-teal-500",
      bottom: "border-b-amber-500",
      left: "border-l-lime-500",
    },
  },
  {
    name: "Josef Gomez",
    position: "Co-Owner, Sales & Marketing at Allegra",
    message:
      "One of the things we love most about SinaLite are quality products, the turnaround times are fantastic, and the diversity of products. It's a great company, 10 out of 10.",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png",
    borderColors: {
      top: "border-t-indigo-500",
      right: "border-r-teal-500",
      bottom: "border-b-amber-500",
      left: "border-l-lime-500",
    },
  },
  {
    name: "Josef Gomez",
    position: "Co-Owner, Sales & Marketing at Allegra",
    message:
      "One of the things we love most about SinaLite are quality products, the turnaround times are fantastic, and the diversity of products. It's a great company, 10 out of 10.",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png",
    borderColors: {
      top: "border-t-indigo-500",
      right: "border-r-teal-500",
      bottom: "border-b-amber-500",
      left: "border-l-lime-500",
    },
  },
  {
    name: "Josef Gomez",
    position: "Co-Owner, Sales & Marketing at Allegra",
    message:
      "One of the things we love most about SinaLite are quality products, the turnaround times are fantastic, and the diversity of products. It's a great company, 10 out of 10.",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png",
    borderColors: {
      top: "border-t-indigo-500",
      right: "border-r-teal-500",
      bottom: "border-b-amber-500",
      left: "border-l-lime-500",
    },
  },
  {
    name: "Josef Gomez",
    position: "Co-Owner, Sales & Marketing at Allegra",
    message:
      "One of the things we love most about SinaLite are quality products, the turnaround times are fantastic, and the diversity of products. It's a great company, 10 out of 10.",
    image: "https://png.pngitem.com/pimgs/s/508-5087336_person-man-user-account-profile-employee-profile-template.png",
    borderColors: {
      top: "border-t-indigo-500",
      right: "border-r-teal-500",
      bottom: "border-b-amber-500",
      left: "border-l-lime-500",
    },
  },
];


const Testimonials = () => {
  const scrollContainerRef = useRef(null);
    // Handle mouse enter to stop scrolling
    const handleMouseEnter = () => {
      scrollContainerRef.current.style.animationPlayState = 'paused';
    };
  
    // Handle mouse leave to resume scrolling
    const handleMouseLeave = () => {
      scrollContainerRef.current.style.animationPlayState = 'running';
    };
  
    // Handle manual scrolling
    const handleScroll = (event) => {
      scrollContainerRef.current.scrollLeft += event.deltaY;
    };
  return (
    <div className="relative overflow-hidden h-100 w-full bg-gray-800 py-2 ">

    <div className="flex justify-around items-start py-3">
      <img 
        src="https://www.zenloop.com/en/wp-content/uploads/sites/2/2022/03/Empfehlungsmarketing-Header.svg" 
        className="h-[150px] w-[400px] object-cover hidden lg:block" 
        alt="" 
      />
      <h1 className="font-extrabold py-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-500 text-4xl lg:text-6xl">
        Happy Customer
      </h1>
      <img 
        src="https://www.zenloop.com/en/wp-content/uploads/sites/2/2022/03/leitfaden-kundenzufriedenheit-header.svg" 
        className="h-[150px] w-[400px] object-cover hidden lg:block"  
        alt="" 
      />
    </div>

    <div
      className="overflow-hidden py-5"
      onWheel={handleScroll} // Handle manual scroll with mouse wheel
    >
      <div
        ref={scrollContainerRef}
        className="flex items-center animate-scroll-left space-x-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white rounded-xl shadow-lg p-6 w-80 flex-shrink-0 border-4 
                        ${testimonial.borderColors.top} ${testimonial.borderColors.right} 
                        ${testimonial.borderColors.bottom} ${testimonial.borderColors.left}`}
          >
            {/* Image */}
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-white shadow-md"
              />
              <div className="ml-4 text-white">
                <p className="font-bold text-lg text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </div>
            {/* Message */}
            <p className="mt-2 text-gray-300">{testimonial.message}</p>

            {/* Lighting Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 rounded-xl animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
