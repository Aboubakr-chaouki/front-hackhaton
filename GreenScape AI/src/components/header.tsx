import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Leaf className="h-8 w-8 text-emerald-600" />
          <span className="text-2xl font-bold text-emerald-800">GreenScape AI</span>
        </div>
        <nav>
          <ul className="flex space-x-4 sm:space-x-6">
            <li>
              <Link to="/" className="text-emerald-700 hover:text-emerald-500 transition duration-300">Accueil</Link>
            </li>
            <li>
              <Link to="/generator" className="text-emerald-700 hover:text-emerald-500 transition duration-300">Générer un environnement</Link>
            </li>
            <li>
              <a href="#contact" className="text-emerald-700 hover:text-emerald-500 transition duration-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;