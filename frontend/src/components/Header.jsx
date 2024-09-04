import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';
import ThemeSwitcher from './ThemeSwitcher';

import { BiSolidShoppingBags } from "react-icons/bi";

import shahStore from "../assest/banner/shah_store1.png";

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

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
    <header className='h-16 fixed w-full z-50 bg-white backdrop-filter backdrop-blur-md flex'>
      <div className='container mx-auto flex items-center justify-between px-4'>
        <div>
          <Link to={"/"}>
            <img src={shahStore} className='h-[54px] w-[78px] object-cover' alt='Shah Store' />
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input 
            type='text' 
            placeholder='search product here...' 
            className='w-full outline-none text-black dark:text-white' 
            onChange={handleSearch} 
            value={search} 
          />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-7'>
        <div>
          <Link to={"/order"} className='whitespace-nowrap hidden md:flex bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:bg-gray-700 px-2 py-1 text-gray-700 dark:text-gray-100 rounded-md' onClick={() => setMenuDisplay(prev => !prev)}>
          <BiSolidShoppingBags className='mt-1 me-1' /> Orders 
          </Link>
        </div>

        <div>
          <Link to={"/contact"} className='whitespace-nowrap hidden md:block bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:bg-gray-700 px-2 py-1 text-gray-700 dark:text-gray-100 rounded-md' onClick={() => setMenuDisplay(prev => !prev)}>
            Contact
          </Link>
        </div>


<div className='relative flex justify-center'>
            {user?._id && (
              <div className='text-3xl cursor-pointer relative flex justify-center text-black dark:text-white' onClick={() => setMenuDisplay(prev => !prev)}>
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
                    <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 dark:hover:bg-gray-700 p-2 text-black dark:text-white' onClick={() => setMenuDisplay(prev => !prev)}>
                      Admin Panel
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>
          {user?._id && (
            <Link to={"/cart"} className='text-2xl relative text-black dark:text-white'>
              <span className='text-black dark:text-black'><FaShoppingCart /></span>
              <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>{context?.cartProductCount}</p>
              </div>
            </Link>
          )}

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
          {/* Adding Theme Switcher */}
        </div>
      </div>
<ThemeSwitcher />
    </header>
  );
};

export default Header;
