import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Leaf } from 'lucide-react'; // Importation des icônes Lucide
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Section logo et description */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start">
              {/* Utilisation de l'icône 'Leaf' de Lucide */}
              <Leaf className="h-6 w-6 mr-2" />
              GreenScape AI
            </h3>
            <p className="text-center md:text-left">
              Transformez vos espaces verts avec l'intelligence artificielle.
            </p>
          </div>

          {/* Section liens rapides */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 text-center md:text-left">Liens rapides</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/" className="hover:text-emerald-300 transition duration-300">Accueil</Link></li>
              <li><Link to="/generator" className="hover:text-emerald-300 transition duration-300">Générer un environnement</Link></li>
              <li><a href="#contact" className="hover:text-emerald-300 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Section réseaux sociaux */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-center md:text-left">Suivez-nous</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-emerald-300 transition duration-300" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-300 transition duration-300" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-300 transition duration-300" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-300 transition duration-300" aria-label="Linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Section copyright */}
        <div className="border-t border-white mt-8 pt-8 text-center">
          <p>&copy; 2024 GreenScape AI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
