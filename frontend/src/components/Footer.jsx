import React from "react";
import shahLogo from "../assest/banner/shah_store1.png"

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-10 pb-6 rounded mt-10">
      <div className="container mx-auto px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Get to Know Us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Press Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Investor Relations</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Connect with Us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Make Money with Us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Sell on Our Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Affiliate Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Advertise Your Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Become a Vendor</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Let Us Help You</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Your Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Returns Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">100% Purchase Protection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Help</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">Shah Store</h2>
            <p className="text-gray-400 mt-2">
              Your one-stop shop for all your needs. Discover the best deals and shop with confidence.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">We Accept</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <img src="https://www.credit-card-logos.com/images/mastercard_credit-card-logos/mastercard_logo_5.gif" alt="MasterCrd" className="h-8 rounded-md"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuEI6llRz67BfxHf09O4ulr3VxaGMPMV4Bmv7qYx4e0UEi2DBJVVAScagp2HVaLPP4ZU&usqp=CAU" alt="Visa" className="h-8 rounded-md"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_S1I-kRo8EmqBe0MSfTSRdtAflozeeDoBQ&s" alt="PayPal" className="h-8 rounded-md"/>
              <img src="https://bfsi.eletsonline.com/wp-content/uploads/2019/10/Phonepay.jpg" alt="American Express" className="h-8 rounded-md"/>
            </div>
          </div>

          {/* Download Our App */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Download Our App</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <img src={shahLogo} alt="App Store" className="h-10 rounded"/>
              <img src="https://via.placeholder.com/120x40" alt="Google Play" className="h-10"/>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-gray-400 text-center py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
