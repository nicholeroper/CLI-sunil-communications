import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const brands = [
    'Nokia', 'Sony', 'Intex', 'iPhone', 'Samsung', 'Oppo', 'Vivo',
    'Xiaomi', 'Realme', 'OnePlus', 'Motorola', 'Asus'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">SUNIL COMMUNICATION</h3>
            <p className="text-sm mb-4 text-orange-400 font-semibold">जय मां उफराई</p>
            <p className="text-sm leading-relaxed">
              Your trusted partner for all mobile phone needs in Karanprayag.
              We provide quality products and services with customer satisfaction as our priority.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link to="/accessories" className="hover:text-orange-500 transition-colors">Accessories</Link></li>
              <li><Link to="/financing" className="hover:text-orange-500 transition-colors">Bajaj Finance</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                <span>Main Market, Karanprayag, Chamoli (Uttarakhand)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-orange-500" />
                <div className="flex flex-col">
                  <a href="tel:+919760262277" className="hover:text-orange-500">+91-9760262277</a>
                  <a href="tel:+917895491113" className="hover:text-orange-500">+91-7895491113</a>
                  <a href="tel:+919837507206" className="hover:text-orange-500">+91-9837507206</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-orange-500" />
                <span>Mon - Sun: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Brands</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="bg-gray-800 px-2 py-1 rounded hover:bg-orange-600 transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-orange-400 mb-2">Financing Partner</p>
              <div className="bg-white px-4 py-2 rounded inline-block">
                <span className="text-blue-900 font-bold text-lg">Bajaj Finserv</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>© {currentYear} Sunil Communication. All rights reserved.</p>
          <p className="mt-2">Proprietor: Mr. Sunil Thapliyal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
