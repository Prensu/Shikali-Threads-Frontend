import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // your asset imports
import { ShopContext } from '../context/ShopContext'; // if needed for token management

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { token, setToken } = useContext(ShopContext); // Assuming token management here

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Logout function clears token and navigates to login
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setProfileVisible(false);
    navigate('/login');
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="flex items-center justify-between font-medium px-5 sm:px-10">
          <h3 className="text-2xl font-semibold">
            Shikali{' '}
            <span className="text-pink-500 hover:text-pink-700 transition-colors duration-300">
              Threads
            </span>
          </h3>

          <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${isActive ? 'text-pink-500' : ''}`
              }
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${isActive ? 'text-pink-500' : ''}`
              }
            >
              <p>Collection</p>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${isActive ? 'text-pink-500' : ''}`
              }
            >
              <p>About</p>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${isActive ? 'text-pink-500' : ''}`
              }
            >
              <p>Contact</p>
            </NavLink>
          </ul>

          <div className="flex items-center gap-6">
            {/* Search Icon (Add your onClick if needed) */}
            <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-5 cursor-pointer"
                onClick={() => setProfileVisible((v) => !v)}
              />
              {profileVisible && (
                <div
                  style={{ zIndex: 9999 }}
                  className="absolute right-0 mt-2 w-36 bg-slate-100 rounded shadow-md text-gray-600 flex flex-col gap-2 p-3"
                >
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={() => {
                      setProfileVisible(false);
                      navigate('/profile');
                    }}
                  >
                    My Profile
                  </p>
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={() => {
                      setProfileVisible(false);
                      navigate('/orders');
                    }}
                  >
                    Orders
                  </p>
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>

            {/* Cart Link with badge */}
            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                9
              </p>
            </Link>

            {/* Mobile menu icon - you can implement toggle here */}
            <img
              src={assets.menu_icon}
              className="w-5 cursor-pointer sm:hidden"
              alt="Menu"
              // onClick={} // Add your sidebar toggle here if needed
            />
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-[80px] sm:h-[100px]" />
    </>
  );
};

export default Navbar;
