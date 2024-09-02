import React, { useState, useEffect, useRef } from 'react';
import refresh from "../assest/contact/refresh.png"

const CustomReCaptcha = ({ onVerify }) => {
  const [captchaCode, setCaptchaCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const captchaCanvas = useRef(null);
  const [isRotating, setIsRotating] = useState(false);



  // Function to generate random code
  const generateCaptcha = () => {
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptchaCode(randomCode);
    drawCaptcha(randomCode);
  };

  // Draw CAPTCHA with distortions and background lines
  const drawCaptcha = (code) => {
    const canvas = captchaCanvas.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background noise lines
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Draw CAPTCHA text with random rotations, scaling, and positions
    // ctx.font = 'bold 28px Courier New';
    // ctx.font = 'bold 28px Bradley Hand';
    ctx.font = 'bold 28px Georgia';
    ctx.fillStyle = '#000';
    let x = 10;
    for (let i = 0; i < code.length; i++) {
      const letter = code[i];
      ctx.save();
      const angle = Math.random() * 0.4 - 0.2; // Rotate between -0.2 to 0.2 radians
      const scale = Math.random() * 0.3 + 0.8; // Scale between 0.8 to 1.1
      ctx.translate(x, 35);
      ctx.rotate(angle);
      ctx.scale(scale, scale);
      ctx.fillText(letter, 0, 0);
      ctx.restore();
      x += 20;
    }

    // Add more noise with random dots
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fill();
    }
  };

  // Initialize CAPTCHA code on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const verifyCaptcha = () => {
    const isValid = userInput === captchaCode;
    setIsVerified(isValid);
    onVerify(isValid);

    if (isValid) {
      setMessage('Captcha verified successfully!');
    } else {
      setTimeout(()=>{
        generateCaptcha();
        setMessage(false)
      },4000)
      setMessage('You entered the wrong captcha. Please try again.');
      setUserInput('');
   
    }
  };

  const refreshCaptcha = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500); // Animation duration in milliseconds

    generateCaptcha(); // Generate a new CAPTCHA code
    setMessage(''); // Clear any existing messages when refreshing
    setUserInput('');
    onVerify(false);
   
    
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <canvas
          ref={captchaCanvas}
          width="150"
          height="50"
          className="bg-gray-100 border px-4 rounded"
        />
        <div className='bg-blue-300 p-1 rounded-full hover:bg-blue-400 ml-2'>
          <button
            type='button'
            onClick={refreshCaptcha}
            className={`rounded-full flex items-center justify-center w-9 h-9 transition-transform ${
              isRotating ? 'animate-spin' : ''
            }`}
          >
            <img src={refresh} alt='Refresh Captcha' /> 
          </button>
        </div>
      </div>

      <div className="md:flex sm:block sm:items-center">
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="Enter the captcha"
          className="w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        />
        <button
          type='button'
          onClick={verifyCaptcha}
          className="w-full md:w-auto ml-0 md:ml-4 mt-4 md:mt-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Verify
        </button>
      </div>
      <div className={`mt-2 text-sm ${isVerified ? 'text-green-600' : 'text-red-600'}`}>
        {message}
      </div>
    </div>
  );
};

export default CustomReCaptcha;