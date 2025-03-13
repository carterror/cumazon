import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';

export default function Footer() {
  const footerLinks = {
    'Get to Know Us': [
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'About Amazon', href: '/about' },
      { label: 'Investor Relations', href: '/investor-relations' },
    ],
    'Make Money with Us': [
      { label: 'Sell products on Amazon', href: '/sell' },
      { label: 'Sell on Amazon Business', href: '/business' },
      { label: 'Become an Affiliate', href: '/affiliate' },
      { label: 'Advertise Your Products', href: '/advertise' },
    ],
    'Amazon Payment Products': [
      { label: 'Amazon Business Card', href: '/business-card' },
      { label: 'Shop with Points', href: '/points' },
      { label: 'Reload Your Balance', href: '/reload' },
      { label: 'Amazon Currency Converter', href: '/currency' },
    ],
    'Let Us Help You': [
      { label: 'Amazon and COVID-19', href: '/covid' },
      { label: 'Your Account', href: '/account' },
      { label: 'Your Orders', href: '/orders' },
      { label: 'Shipping Rates & Policies', href: '/shipping' },
      { label: 'Returns & Replacements', href: '/returns' },
      { label: 'Help', href: '/help' },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-cuba-blue text-white mt-8">
      <button 
        onClick={scrollToTop}
        className="w-full bg-cuba-trust hover:bg-cuba-darkBlue py-4 text-sm"
      >
        Back to top
      </button>

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-2">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href}
                      className="text-sm text-gray-200 hover:text-cuba-secondary hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-cuba-trust">
          <div className="flex flex-col items-center text-sm text-gray-200">
            <Logo size="large" className="mb-4" />
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/conditions" className="hover:text-cuba-secondary hover:underline">
                Conditions of Use
              </Link>
              <Link to="/privacy" className="hover:text-cuba-secondary hover:underline">
                Privacy Notice
              </Link>
              <Link to="/interest-based-ads" className="hover:text-cuba-secondary hover:underline">
                Interest-Based Ads
              </Link>
            </div>
            <p className="mt-2">© 2024-{new Date().getFullYear()}, Cumazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </footer>
  );
}