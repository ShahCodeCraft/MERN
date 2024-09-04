import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/index';

const Address = () => {
  const { shippingAddress, userAddress } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    phoneNumber: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { fullName, address, city, state, country, pincode, phoneNumber } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);


    const result = await shippingAddress(fullName, address, city, state, country, pincode, phoneNumber);
    console.log("Address added ", result);
    if (result.success) {
      navigate('/checkout');
    }

    setFormData({
      fullName: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
      phoneNumber: ''
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-gray-600 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-white text-center mb-6">Shipping Address</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-white font-medium mb-1">
            Full Name
          </label>
          <input
            name="fullName"
            value={fullName}
            onChange={onChangeHandler}
            type="text"
            className="w-full p-3 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-white font-medium mb-1">
            Phone Number
          </label>
          <input
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChangeHandler}
            type="tel"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 234 567 890"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-white font-medium mb-1">
            Address
          </label>
          <textarea
            name="address"
            value={address}
            onChange={onChangeHandler}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1234 Main St, Apt 101"
            rows="3"
            required
          />
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-white font-medium mb-1">
              City
            </label>
            <input
              name="city"
              value={city}
              onChange={onChangeHandler}
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="City"
              required
            />
          </div>

          <div>
            <label htmlFor="state" className="block text-white font-medium mb-1">
              State
            </label>
            <input
              name="state"
              value={state}
              onChange={onChangeHandler}
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="State"
              required
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pincode" className="block text-white font-medium mb-1">
              Pincode
            </label>
            <input
              name="pincode"
              value={pincode}
              onChange={onChangeHandler}
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Pincode"
              required
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-white font-medium mb-1">
              Country
            </label>
            <input
              name="country"
              value={country}
              onChange={onChangeHandler}
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Country"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Deliver to this Address
          </button>
        </div>
      </form>

      {userAddress && (
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/checkout')}
            className="w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Use Saved Address
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;

