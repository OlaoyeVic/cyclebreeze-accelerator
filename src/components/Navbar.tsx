import { useState } from "react";
import blackLogo from "../assets/black-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F0F9EC] border-b border-gray-200 shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-green-700">
              {/* Cycle<span className="text-black">Breeze</span> */}
              <img src={blackLogo} alt="CycleBreeze" className="h-8" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-700">About Us</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Services</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Sales</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Features</a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a href="#" className="bg-gradient-to-r from-[#6FC446] via-transparent to-[#C3E6B2] text-[#313134] font-normal text-xs px-4 py-2 rounded-[34px] hover:bg-green-700">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50">About Us</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Services</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Pricing</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Sales</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Features</a>
            <a href="#" className="block px-4 py-2 bg-green-600 text-white text-center rounded-md hover:bg-green-700">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;