import React, { useState } from 'react';
import Logo from "../image/cropped_unfluke_logo.png";
import Bell from "../image/bell.png";
import Coin from "../image/11136102.png";
import Monkey from "../image/business men icon.png"

const Navbar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img className="h-10" src={Logo} alt="Logo" />
            <div className="flex items-center ml-auto space-x-4">
              <a><img className=" h-6 cursor-pointer " src={Bell} alt="Bell Icon" /></a>
              <a className="flex"><img className="h-6 cursor-pointer  rounded-full" src={Coin} alt="Coin Icon" /><p>0</p></a>
              <div className="relative">
                <img
                  className="h-10 cursor-pointer rounded-full"
                  src={Monkey}
                  alt="Monkey"
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                />
                {isSubMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Earning</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Funds</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Change Password</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


