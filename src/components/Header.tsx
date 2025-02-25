import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import blackLogo from "../assets/black-logo.svg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (route: string) => location.pathname === route;

  return (
    <header className="py-5 fixed left-0 top-0 w-full z-50 bg-gradient-to-b from-transparent via-white to-transparent shadow-lg backdrop-blur-sm">
      <div className="flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/">
        <img src={blackLogo} alt="CycleBreeze" className="h-8" />
        </Link>

        {/* Desktop Navigation Links
        <div className="hidden md:flex space-x-6">
          {['about us', 'services', 'projects', 'products', 'academy', 'publications', 'programs'].map((route) => (
            <div key={route} className={`text-sm lg:text-base ${isActive(`/${route}`) ? 'font-bold text-black' : ''}`}>
              <Link to={`/${route}`}>{route.charAt(0).toUpperCase() + route.slice(1)}</Link>
            </div>
          ))}
        </div>

        Hamburger Menu
        <motion.div className="cursor-pointer md:block" onClick={toggleMenu} whileHover={{ scale: 1.1 }}>
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </motion.div> */}

        <div className="flex items-center space-x-6">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {['about', 'projects', 'services', 'academy', 'publications', 'programs'].map((route) => (
              <div key={route} className={`text-sm lg:text-base ${isActive(`/${route}`) ? 'font-bold text-black' : ''}`}>
                <Link to={`/${route}`}>{route.charAt(0).toUpperCase() + route.slice(1)}</Link>
              </div>
            ))}
          </div>

          {/* Hamburger Menu */}
          <motion.div className="cursor-pointer md:block" onClick={toggleMenu} whileHover={{ scale: 1.1 }}>
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Drawer */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: menuOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3 }}
        className="absolute right-0 top-0 w-full max-w-screen-lg mx-auto bg-white shadow-lg p-8 overflow-y-auto h-screen"
      >
        <div className="flex justify-end">
          <div onClick={toggleMenu} className="cursor-pointer">
            {/* <img src="/images/ion_close.svg" alt="Close Menu" /> */}
            <BiX className="w-12 h-12" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['about us', 'services', 'products', 'projects', 'academy', 'careers', 'publications', 'programs/Events', 'contact us'].map((route) => (
            <div key={route}>
              <h3 className="font-bold text-lg">{route.charAt(0).toUpperCase() + route.slice(1)}</h3>
              <div className="space-y-2 text-gray-700">
                {route === 'about us' && (
                  <div className="flex flex-col">
                    <Link to="/about#whatWeDo">What we do</Link>
                    <Link to="/about#mission">Mission</Link>
                    <Link to="/about#partners">Partners</Link>
                    <Link to="/about#cyclebreezeHub">Cyclebreeze hub</Link>
                  </div>
                )}
                {route === 'services' && (
                  <div className="flex flex-col">
                    <Link to="/services/product-dev">Product Development</Link>
                    <Link to="/services/branding">Branding</Link>
                    <Link to="/services/business-dev">Business Development</Link>
                    <Link to="/services/web-app-dev">Web/App Development</Link>
                    <Link to="/services/web-app-dev">Web/App Development</Link>
                    <Link to="/services/web-app-dev">Digital Media Creation</Link>
                    
                  </div>
                )}
                {route === 'products' && (
                  <div className="flex flex-col">
                    <Link to="/projects/circue">Data Class.ng</Link>
                    <Link to="/projects/hwb">CycleBreeze E-library</Link>
                    <Link to="/projects/ni-he">ROME</Link>
                    <Link to="/projects/ni-he">Powerbank</Link>
                  </div>
                )}
                {route === 'projects' && (
                  <div className="flex flex-col">
                    <Link to="/projects/circue">Circue</Link>
                    <Link to="/projects/hwb">Healthworkers Bio</Link>
                    <Link to="/projects/ni-he">NI-HE</Link>
                  </div>
                )}
                {route === 'projects' && (
                  <div className="flex flex-col">
                    <Link to="/services/product-dev">Circue</Link>
                    <Link to="/services/branding">Healthworkers Bio</Link>
                    <Link to="/services/business-dev">NIHE</Link>
                    <Link to="/services/web-app-dev">Tempolasafun</Link>
                    <Link to="/services/web-app-dev">Thecreatorsinnercircle</Link>
                    <Link to="/services/web-app-dev">Pretty Dunia</Link>
                    
                  </div>
                )}
                {route === 'academy' && (
                  <div className="flex flex-col">
                    <Link to="/services/product-dev">AI Mastery Courses for Professionals</Link>
                    <Link to="/services/branding">Certificate Courses</Link>
                  </div>
                )}
                {route === 'careers' && (
                  <div className="flex flex-col">
                    <Link to="/services/product-dev">Jobs/Internships</Link>
                  </div>
                )}
                {route === 'publications' && (
                  <div className="flex flex-col">
                    <Link to="/services/product-dev">Technical Papers</Link>
                    <Link to="/services/branding">Technical Reports</Link>
                  </div>
                )}
                {route === 'programs/Events' && (
                  <div className="flex flex-col">
                    <Link to="/services/product-dev">Incubation</Link>
                    <Link to="/services/branding">Lautech Training</Link>
                  </div>
                )}
                {route === 'contact us' && (
                  <div className="flex flex-col">
                    <Link to="/services/product-dev">Locate us</Link>
                    <Link to="/services/branding">Reach out</Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;