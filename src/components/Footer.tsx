import { Link } from 'react-router-dom';
import { GraduationCap, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-10 w-10 text-emerald-500" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white tracking-tight leading-none">BRAIN BRIDGE</span>
                <span className="text-xs text-emerald-400 uppercase tracking-widest">University</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering minds, bridging the gap to a brighter future through excellence in education, research, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-emerald-400 transition-colors text-sm">Admissions</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-emerald-400 transition-colors text-sm">Student Portal</Link>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors text-sm">Academic Calendar</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors text-sm">Campus Life</a>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Academics</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors text-sm">Undergraduate Programs</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors text-sm">Graduate Programs</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors text-sm">Online Learning</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors text-sm">Research Centers</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors text-sm">Library Services</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm">123 University Avenue,<br />Innovation District,<br />Knowledge City, KC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm">admissions@brainbridge.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Brain Bridge University. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
