
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <img
              className="h-12 w-auto mb-4"
              src="https://floenergy.net/wp-content/uploads/2018/05/Flo-1.png"
              alt="FLO Energy"
            />
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Energy for growth. With over 70 years of experience in the fuel industry, 
              FLO offers you the right service, at the right price.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">About</Link></li>
              <li><Link to="/locations" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Locations</Link></li>
              <li><Link to="/bulk-fuel" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Bulk Fuel</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li className="break-all">Email: sales1@floenergy.net</li>
              <li>Office: +263 29 2461125-7</li>
              <li>Adrian King: +263 77 224 5578</li>
              <li>Nathan King: +263 71 221 3338</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-gray-300 text-sm text-center lg:text-left">
            © {currentYear} FLO Energy. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-500 hidden sm:block">|</span>
            <a 
              href="https://kawerifytech.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Website Developed by Kawerify Tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
