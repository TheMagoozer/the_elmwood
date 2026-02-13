import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLinkItem } from '../types';
import { NAV_LINKS, WINGS_ICON_IMG } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling on the body when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2, 4);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff6ec]/95 backdrop-blur-sm border-b-4 border-elmwood-black shadow-retro-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between md:justify-center relative">
          
          {/* Mobile Hamburger - Left Aligned */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 border-2 border-elmwood-black bg-elmwood-blue text-white shadow-retro-sm active:translate-y-1 active:shadow-none transition-all"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex w-full items-center justify-center">
            <div className="flex-1 flex justify-end gap-8 lg:gap-12 text-lg font-bold uppercase tracking-wider">
              {leftLinks.map((link) => (
                <NavLink key={link.path} link={link} />
              ))}
            </div>

            <div className="mx-8 lg:mx-12 relative group shrink-0">
               <div className="absolute inset-0 bg-elmwood-red rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
               <img 
                 src={WINGS_ICON_IMG} 
                 alt="Elmwood Wings" 
                 className="h-14 w-auto object-contain relative z-10 -mb-5 -translate-y-1.5 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
               />
            </div>

            <div className="flex-1 flex justify-start gap-8 lg:gap-12 text-lg font-bold uppercase tracking-wider">
              {rightLinks.map((link) => (
                <NavLink key={link.path} link={link} />
              ))}
            </div>
          </nav>

          {/* Mobile Logo/Icon Center */}
          <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
             <img 
                 src={WINGS_ICON_IMG} 
                 alt="Elmwood Wings" 
                 className="h-11 w-auto object-contain"
             />
          </div>
          
          {/* Mobile Spacer to balance */}
          <div className="md:hidden w-10"></div>
        </div>
      </header>

      {/* Mobile Drawer - Rendered OUTSIDE header to escape containing block clipping */}
      <div 
        className={`fixed inset-0 z-40 bg-elmwood-cream/95 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-start pt-32 space-y-8 overflow-y-auto mobile-menu ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .mobile-menu::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {NAV_LINKS.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black uppercase tracking-widest text-elmwood-black hover:text-elmwood-blue transition-all hover:-rotate-2 transform duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

const NavLink: React.FC<{ link: NavLinkItem }> = ({ link }) => {
  const location = useLocation();
  const isActive = location.pathname === link.path;
  
  return (
    <Link 
      to={link.path} 
      className={`relative group py-2 px-1 transition-all hover:-translate-y-1 ${isActive ? 'text-elmwood-blue' : 'text-elmwood-black hover:text-elmwood-red'}`}
    >
      <span className="relative z-10">{link.label}</span>
      <span className={`absolute bottom-0 left-0 w-full h-1 bg-elmwood-blue transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
    </Link>
  );
};

export default Navbar;