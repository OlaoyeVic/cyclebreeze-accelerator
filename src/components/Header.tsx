import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const externalUrls = {
    about: 'https://cyclebreeze.com/about',
    projects: 'https://cyclebreeze.com/projects',
    services: 'https://cyclebreeze.com/services',
    academy: 'https://cyclebreeze.com/academy',
    publications: 'https://cyclebreeze.com/publications',
    programs: 'https://cyclebreeze.com/programs',
  };

  return (
    <header className="py-5 px-4 sm:px-6 lg:px-8 fixed left-0 top-0 w-full z-50 bg-gradient-to-b from-transparent via-white to-transparent shadow-lg backdrop-blur-sm">
      <div className="flex justify-between items-center px-4">
        {/* Logo */}
        <a href="https://www.cyclebreeze.com/" target="_blank" rel="noopener noreferrer">
        <img src={blackLogo} alt="CycleBreeze" className="h-8" />
        </a>

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
            {(['about', 'projects', 'services', 'academy', 'publications', 'programs'] as const).map((route) => (
              <div key={route} className={`text-sm lg:text-base ${isActive(`/${route}`) ? 'font-bold text-black' : ''}`}>
                <a
                  href={externalUrls[route]}  // Using the external URL based on the route
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                  >
                    {route.charAt(0).toUpperCase() + route.slice(1)}
                  </a>
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
                    <a 
                      href="https://www.cyclebreeze.com/about#whatWeDo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      What we do
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/about#mission"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mission
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/about#partners"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Partners
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/about#cyclebreezeHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cyclebreeze hub
                    </a>
                  </div>
                )}
                {route === 'services' && (
                  <div className="flex flex-col">
                    <a 
                      href="https://www.cyclebreeze.com/services/product-development"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Product Development
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/services/branding"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Branding
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/services/branding"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Business Development
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/services/business-development"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web/App Development
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/services/web-app-development"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web/App Development
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/services/marketing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Marketing
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/services/digital-media-creation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Digital Media Creation
                    </a>
                    
                  </div>
                )}
                {route === 'products' && (
                  <div className="flex flex-col">
                    <a 
                      href="https://dataclass.cyclebreeze.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Data Class.ng
                    </a>
                    <a 
                      href=""
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      CycleBreeze E-library
                    </a>
                    <a 
                      href="https://hirerome.com/sales"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ROME
                    </a>
                    <a 
                      href=""
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      Powerbank
                    </a>
                  </div>
                )}
                {route === 'projects' && (
                  <div className="flex flex-col">
                    <a 
                      href="https://www.cyclebreeze.com/projects/circue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Circue
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/projects/health-workers-bio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Healthworkers Bio
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/projects/ni-he"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NI-HE
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/projects/temploifamosun"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tempolasafun
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/projects/thecreatorsinnercircle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Thecreahrefrsinnercircle
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/projects/prettydunia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pretty Dunia
                    </a>
                  </div>
                )}
                {route === 'academy' && (
                  <div className="flex flex-col">
                    <a
                      href="https://www.cyclebreeze.com/ai-mastery-courses"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AI Mastery Courses for Professionals
                    </a>
                    <a 
                      href="https://academy.cyclebreeze.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificate Courses
                    </a>
                  </div>
                )}
                {route === 'careers' && (
                  <div className="flex flex-col">
                    <a 
                      href=""
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jobs/Internships
                    </a>
                  </div>
                )}
                {route === 'publications' && (
                  <div className="flex flex-col">
                    <a 
                      href="https://www.cyclebreeze.com/technical-papers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Technical Papers
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/technical-reports"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Technical Reports
                    </a>
                  </div>
                )}
                {route === 'programs/Events' && (
                  <div className="flex flex-col">
                    <a 
                      href="https://www.cyclebreeze.com/incubation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Incubation
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/programs/data-analytics-training"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lautech Training
                    </a>
                  </div>
                )}
                {route === 'contact us' && (
                  <div className="flex flex-col">
                    <a 
                      href="https://www.cyclebreeze.com/contact-us"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Locate us
                    </a>
                    <a 
                      href="https://www.cyclebreeze.com/chat-with-us"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reach out
                    </a>
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