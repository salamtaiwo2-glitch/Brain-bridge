import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Admissions', path: '/register' },
    { name: 'Student Portal', path: '/login' },
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <GraduationCap className="h-10 w-10 text-emerald-300" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight leading-none">BRAIN BRIDGE</span>
                <span className="text-xs text-emerald-200 uppercase tracking-widest">University</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-300 ${
                  location.pathname === link.path ? 'text-emerald-300 border-b-2 border-emerald-300 pb-1' : 'text-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/register"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 pb-4 px-4">
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium ${
                  location.pathname === link.path ? 'text-emerald-300' : 'text-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="bg-emerald-600 text-center text-white px-6 py-3 rounded-md font-medium mt-4"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
