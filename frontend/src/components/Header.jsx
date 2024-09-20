// import React, { useContext, useState } from 'react';
// import Logo from './Logo';
// import { GrSearch } from "react-icons/gr";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify';
// import { setUserDetails } from '../store/userSlice';
// import ROLE from '../common/role';
// import Context from '../context';
// import ThemeSwitcher from './ThemeSwitcher';

// import { BiSolidShoppingBags } from "react-icons/bi";
// import { MdContactPhone } from "react-icons/md";

// // import shahStore from "../assest/banner/shah_store1.png";
// import shahStore from "../assest/banner/ShahAlam.png";
// const Header = () => {
//   const user = useSelector(state => state?.user?.user);
//   const dispatch = useDispatch();
//   const [menuDisplay, setMenuDisplay] = useState(false);
//   const context = useContext(Context);
//   const navigate = useNavigate();
//   const searchInput = useLocation();
//   const URLSearch = new URLSearchParams(searchInput?.search);
//   const searchQuery = URLSearch.getAll("q");
//   const [search, setSearch] = useState(searchQuery);
  

//   const handleLogout = async () => {
//     const fetchData = await fetch(SummaryApi.logout_user.url, {
//       method: SummaryApi.logout_user.method,
//       credentials: 'include'
//     });

//     const data = await fetchData.json();

//     if (data.success) {
//       toast.success(data.message);
//       dispatch(setUserDetails(null));
//       navigate("/");
//     }

//     if (data.error) {
//       toast.error(data.message);
//     }
//   };

//   const handleSearch = (e) => {
//     const { value } = e.target;
//     setSearch(value);

//     if (value) {
//       navigate(`/search?q=${value}`);
//     } else {
//       navigate("/search");
//     }
//   };

//   return (
//     <header className='h-16 fixed w-full z-50 bg-gray-50 dark:bg-gray-800 backdrop-filter backdrop-blur-md flex'>
//       <div className='container mx-auto flex items-center justify-center lg:justify-between  px-4'>
//         <div className=''>
//           <Link to={"/"}>
//             <img 
//             // src={shahStore} 
//             src={shahStore}
//             className='h-[20px] w-full sm:h-[50px] sm:w-full object-cover rounded-lg' alt='Shah Store' />
//           </Link>
//         </div>

//         <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
//           <input 
//             type='text' 
//             placeholder='search product here...' 
//             className='w-full outline-none bg-gray-50 dark:bg-gray-800 ps-1' 
//             onChange={handleSearch} 
//             value={search} 
//           />
//           <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
//             <GrSearch />
//           </div>
//         </div>

//     <div className='flex items-center gap-7'>

        
//     <div className='relative flex justify-center'>
//       {/* <div className='block lg:hidden'>
//       <Link 
//             to={"/"} 
//             className='whitespace-nowrap hover:bg-slate-200 dark:hover:bg-gray-800 p-2 bg-gray-200 dark:bg-gray-900 flex rounded-md'  
//           >
//           <BiSolidShoppingBags className='mt-1 me-1' /> Home
//           </Link>
//       </div> */}
//             {user?._id && (
//               <div className='text-3xl ps-1 cursor-pointer relative flex justify-center text-black dark:text-white' onClick={() => setMenuDisplay(prev => !prev)}>
//                 {user?.profilePic ? (
//                   <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
//                 ) : (
//                   <FaRegCircleUser />
//                 )}
//               </div>
//             )}

//             {menuDisplay && (
//               <div className='absolute bg-white dark:bg-gray-800 bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
//                 <nav>
//                   {user?.role === ROLE.ADMIN && (
//                     <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hover:bg-slate-100 dark:hover:bg-gray-700 p-2 text-black dark:text-white' onClick={() => setMenuDisplay(prev => !prev)}>
//                       Admin Panel
//                     </Link>
//                   )}
//                   {(user?.role === ROLE.ADMIN || user?.role === ROLE.GENERAL) && (
//           <Link 
//             to={"/order"} 
//             className='whitespace-nowrap hover:bg-slate-100 dark:hover:bg-gray-700 p-2 text-black dark:text-white flex' 
//             onClick={() => setMenuDisplay(prev => !prev)}
//           >
//           <BiSolidShoppingBags className='mt-1 me-1' /> My-Order
//           </Link>
//         )}
//                 </nav>
//               </div>
//             )}
//           </div>
//           {user?._id && (
//             <Link to={"/cart"} className='text-2xl relative text-black dark:text-white'>
//               <span className='text-gray-900 dark:text-gray-100'><FaShoppingCart /></span>
//               <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
//                 <p className='text-sm'>{context?.cartProductCount}</p>
//               </div>
//             </Link>
//           )}

//           <div>
//             {user?._id ? (
//               <button onClick={handleLogout} className='px-2 py-1 rounded-md text-white bg-red-600 hover:bg-red-700'>
//                 Logout
//               </button>
//             ) : (
//               <Link to={"/login"} className='px-2 py-1 rounded-md text-white bg-red-600 hover:bg-red-700'>
//                 Login
//               </Link>
//             )}
//           </div>
          
//         </div>
        
//       </div>
//       <div className='hidden lg:flex p-4 '>
//           <Link to={"/contact"} className='whitespace-nowrap flex bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:bg-gray-700 px-2 py-1 text-gray-700 dark:text-gray-100 rounded-md' onClick={() => setMenuDisplay(prev => !prev)}>
//           <MdContactPhone className='mt-1 me-1'/>Contact
//           </Link>
//         </div>
//          {/* Adding Theme Switcher */}
//          <ThemeSwitcher />
//     </header>
//   );
// };

// export default Header;





import React, { useContext, useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import {FaShoppingCart, FaBars, FaTimes  } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';
import ThemeSwitcher from './ThemeSwitcher';

import { BiSolidShoppingBags } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import shahStore from "../assest/banner/ShahAlam.png";

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false); // To manage hamburger menu state
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const hamburgerRef = useRef();

  // Toggle the hamburger open/close when clicking the hamburger icon
  const toggleHamburger = () => {
    setHamburgerOpen(prevState => !prevState);
    setHamburgerOpen(!hamburgerOpen);
  };

  // Close the hamburger when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setHamburgerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className='fixed w-full z-50 bg-gray-50 dark:bg-gray-800 backdrop-filter backdrop-blur-md px-4'>

      {/* Responsive Grid Layout */}
      <div className=" block sm:flex items-center justify-between w-full h-24 sm:h-16 ">
        
        {/* Logo Section */}
        <div className='flex justify-between w-full items-center '>
          <div>
          <Link to={"/"}>
            <img 
              src={shahStore}
              className='h-10 w-full object-cover rounded-lg' 
              alt='Shah Store' 
            />
          </Link>
          </div>

          <div className='hidden sm:flex items-center w-1/2 border rounded-full focus-within:shadow pl-2 sm:mt-0 mt-3'>
            <input 
              type='text' 
              placeholder='Search product here...' 
              className='w-full outline-none bg-gray-50 dark:bg-gray-800 ps-1' 
              onChange={handleSearch} 
              value={search} 
            />
            <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
              <GrSearch />
            </div>
          </div>

          <div>
            {/* Cart */}
          {user?._id && (
            <Link to={"/cart"} className='text-2xl relative text-black dark:text-white'>
              <FaShoppingCart />
              <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>{context?.cartProductCount}</p>
              </div>
            </Link>
          )}
          </div>
      <div>
            {user?._id && (
              <div className='text-3xl ps-1 cursor-pointer relative flex justify-center text-black dark:text-white' onClick={() => setMenuDisplay(prev => !prev)}>
                {user?.profilePic ? (
                  <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}

            {menuDisplay && (
              <div className='absolute bg-white dark:bg-gray-800 bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hover:bg-slate-100 dark:hover:bg-gray-700 p-2 text-black dark:text-white' onClick={() => setMenuDisplay(prev => !prev)}>
                      Admin Panel
                    </Link>
                  )}
                  {(user?.role === ROLE.ADMIN || user?.role === ROLE.GENERAL) && (
          <Link 
            to={"/order"} 
            className='whitespace-nowrap hover:bg-slate-100 dark:hover:bg-gray-700 p-2 text-black dark:text-white flex' 
            onClick={() => setMenuDisplay(prev => !prev)}
          >
          <BiSolidShoppingBags className='mt-1 me-1' /> My-Order
          </Link>
        )}
                </nav>
              </div>
            )}
            </div>
  
             {/* Hamburger Menu Button for Mobile */}
        <div className='lg:hidden'>
          <button onClick={toggleHamburger} className='text-xl text-gray-900 dark:text-gray-100'>
          {hamburgerOpen ? <FaTimes /> : <FaBars />} {/* Toggles between the menu open and close icons */}
            {/* <FaBars /> */}
          </button>
        </div>
         
          
        
        </div>

        {/* Search Bar Section */}
        <div className='sm:hidden flex items-center w-full'>
          <div className='flex items-center w-full border rounded-full focus-within:shadow pl-2 sm:mt-0 mt-3'>
            <input 
              type='text' 
              placeholder='Search product here...' 
              className='w-full outline-none bg-gray-50 dark:bg-gray-800 ps-1' 
              onChange={handleSearch} 
              value={search} 
            />
            <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
              <GrSearch />
            </div>
          </div>
        </div>

       

        {/* Full Menu for Large Screens */}
        <div className='hidden lg:flex items-center gap-7 ml-5'>

          {/* Login / Logout */}
          <div>
            {user?._id ? (
              <button onClick={handleLogout} className='px-2 py-1 rounded-md text-white bg-red-600 hover:bg-red-700'>
                Logout
              </button>
            ) : (
              <Link to={"/login"} className='px-2 py-1 rounded-md text-white bg-red-600 hover:bg-red-700'>
                Login
              </Link>
            )}
          </div>

          {/* Contact & ThemeSwitcher */}
          <Link to={"/contact"} className='whitespace-nowrap flex bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:bg-gray-700 px-2 py-1 text-gray-700 dark:text-gray-100 rounded-md'>
            <MdContactPhone className='mt-1 me-1'/> Contact
          </Link>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      {hamburgerOpen && (
        <div className='absolute top-16 left-0 w-full bg-gray-50 dark:bg-gray-800 lg:hidden p-4 space-y-4' ref={hamburgerRef}>
          <div className='flex flex-col'>

            <Link to={"/contact"} className='block text-black dark:text-white'>
              <MdContactPhone className='inline-block mr-2'/> Contact
            </Link>
            <Link to={"/about"} className='block text-black dark:text-white'>
              <MdContactPhone className='inline-block mr-2'/> About
            </Link>
            <ThemeSwitcher />
            {user?._id ? (
              <button onClick={handleLogout} className='w-full px-2 py-1 rounded-md text-white bg-red-600 hover:bg-red-700'>
                Logout
              </button>
            ) : (
              <Link to={"/login"} className='block w-full px-2 py-1 rounded-md text-white bg-red-600 hover:bg-red-700'>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
