import Logo from "./Logo";
import { Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <Logo textColor="text-white" />
            <p className="text-gray-400 text-base leading-relaxed max-w-sm font-normal">
              Specialized Architectural BIM consultancy delivering clean, coordinated, and submission-ready models for large-scale developments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-accent transition-colors text-base font-normal">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              {['BIM Coordination', '3D Modeling', 'Clash Detection'].map((item) => (
                <li key={item} className="text-gray-400 text-base font-normal">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-heading font-bold text-lg mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center md:items-start gap-3 text-gray-400 text-base font-normal">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Amman, Jordan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-base font-normal">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@navbim.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} NAV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
