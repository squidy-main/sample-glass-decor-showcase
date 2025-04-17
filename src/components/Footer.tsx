
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-light tracking-widest uppercase mb-6 block">
              sample
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Curating modern minimalism for your living spaces. 
              Discover iconic designs that transform your home.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase mb-6 tracking-wider text-gray-800">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-500 hover:text-black transition-colors">Home</Link></li>
              <li><Link to="/collections" className="text-gray-500 hover:text-black transition-colors">Collections</Link></li>
              <li><Link to="/featured" className="text-gray-500 hover:text-black transition-colors">Featured</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-black transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase mb-6 tracking-wider text-gray-800">Information</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-500 hover:text-black transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-black transition-colors">Design Philosophy</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase mb-6 tracking-wider text-gray-800">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Subscribe for updates on new products and design inspirations.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} sample. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
