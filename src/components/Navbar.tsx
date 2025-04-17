
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrollPosition > 20 ? "glass py-3" : "py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl md:text-3xl font-light tracking-widest uppercase">
          sample
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/featured">Featured</NavLink>
          <NavLink to="/about">About</NavLink>
          <button 
            className="ml-4 p-2 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 glass-dark pt-20 z-40 lg:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/collections" onClick={() => setIsMenuOpen(false)}>Collections</MobileNavLink>
            <MobileNavLink to="/featured" onClick={() => setIsMenuOpen(false)}>Featured</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <div className="mt-6 flex items-center">
              <Search size={20} className="mr-2" />
              <span>Search</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="relative font-light tracking-wider text-gray-800 hover:text-black transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }: { to: string, children: React.ReactNode, onClick: () => void }) => {
  return (
    <Link 
      to={to} 
      className="text-2xl font-light tracking-wider text-white"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
