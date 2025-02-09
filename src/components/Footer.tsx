import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-[1250px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-white">BikeZone</h2>
          <p className="mt-2 text-sm">
            Your one-stop solution for bike sales and repairs. Quality service,
            guaranteed satisfaction!
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-green-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/bikes" className="hover:text-green-400 transition">
                Bikes
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="mt-2 text-sm flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-green-400" /> 123 Bike Street, NY,
            USA
          </p>
          <p className="text-sm flex items-center gap-2 mb-2">
            <Phone size={16} className="text-green-400" /> +1 (123) 456-7890
          </p>
          <p className="text-sm flex items-center gap-2">
            <Mail size={16} className="text-green-400" /> support@bikezone.com
          </p>
          <div className="flex mt-4 space-x-8">
            <a href="#" className="text-gray-400 hover:text-green-400 -ml-2">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-700 mt-8 pt-4">
        © {new Date().getFullYear()} BikeZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
