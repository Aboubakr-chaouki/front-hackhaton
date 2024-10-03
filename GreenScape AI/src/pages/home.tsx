import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Zap, Layers, Cpu, Database, Maximize, Users, Building, Home, TreePine, Facebook, Twitter, Instagram, Linkedin, Leaf } from 'lucide-react';
import picture1 from '../assets/picture1.avif';
import Header from '../components/header'; 
import Footer from '../components/footer'; 

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <TechnologySection />
        <FeaturesSection />
        <ApplicationsSection />
        <ComparisonSection />
        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <section id="accueil" className="py-20 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Révolutionnez vos espaces verts avec l'IA
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            GreenScape AI transforme la conception paysagère grâce à une technologie de pointe en intelligence artificielle.
          </p>
          <Link 
            to="/generator" 
            className="bg-white text-emerald-600 px-6 sm:px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-100 transition duration-300 shadow-lg inline-block"
          >
            Générer un environnement
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-4">
          <img src={picture1} alt="GreenScape AI Demo" className="rounded-lg shadow-2xl w-full" />
        </div>
      </div>
    </div>
  </section>
);

const TechnologySection = () => (
  <section id="technologie" className="py-20 bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-12 text-center">Notre Technologie IA</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Cpu, title: "Réseaux neuronaux profonds", description: "Apprentissage continu pour des résultats toujours plus précis" },
          { icon: Database, title: "Base de données exhaustive", description: "Millions de plantes et designs pour une variété incomparable" },
          { icon: Maximize, title: "Rendu haute définition", description: "Visualisations en 4K pour un réalisme maximal" }
        ].map((tech, index) => (
          <TechCard key={index} {...tech} />
        ))}
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="fonctionnalités" className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Fonctionnalités Clés</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Image, title: "Analyse d'image avancée", description: "Interprétation précise des espaces existants"},
          { icon: Zap, title: "Génération IA", description: "Création de designs paysagers réalistes et innovants" },
          { icon: Layers, title: "Personnalisation multi-niveaux", description: "Adaptation aux préférences et contraintes spécifiques" }
        ].map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

const ApplicationsSection = () => (
  <section id="applications" className="py-20 bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-12 text-center">Applications Pratiques</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {[
          { icon: Users, title: "Paysagistes professionnels", description: "Création rapide de concepts et de présentations client" },
          { icon: Building, title: "Urbanisme et aménagement", description: "Planification à grande échelle de zones vertes urbaines" },
          { icon: Home, title: "Propriétaires particuliers", description: "Conception facile de jardins personnalisés" },
          { icon: TreePine, title: "Projets de reforestation", description: "Simulation d'impact écologique à long terme" }
        ].map((app, index) => (
          <ApplicationCard key={index} {...app} />
        ))}
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-700">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">GreenScape AI vs Méthodes Traditionnelles</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
              <th className="p-3">Critère</th>
              <th className="p-3">GreenScape AI</th>
              <th className="p-3">Méthodes Traditionnelles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Temps de conception</td>
              <td className="border p-3 bg-emerald-100">Quelques minutes</td>
              <td className="border p-3">Plusieurs jours à semaines</td>
            </tr>
            <tr>
              <td className="border p-3">Coût</td>
              <td className="border p-3 bg-emerald-100">Abordable et prévisible</td>
              <td className="border p-3">Élevé et variable</td>
            </tr>
            <tr>
              <td className="border p-3">Variété des designs</td>
              <td className="border p-3 bg-emerald-100">Illimitée</td>
              <td className="border p-3">Limitée par l'expérience du designer</td>
            </tr>
            <tr>
              <td className="border p-3">Précision écologique</td>
              <td className="border p-3 bg-emerald-100">Basée sur des données scientifiques</td>
              <td className="border p-3">Dépend de l'expertise individuelle</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const StatisticsSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">GreenScape AI en chiffres</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { value: "100K+", label: "Designs générés" },
          { value: "98%", label: "Taux de satisfaction client" },
          { value: "50%", label: "Réduction moyenne des coûts" },
          { value: "30+", label: "Pays utilisant notre technologie" }
        ].map((stat, index) => (
          <div key={index} className="text-center bg-white rounded-lg p-6 shadow-lg">
            <p className="text-4xl sm:text-5xl font-bold mb-2 text-emerald-600">{stat.value}</p>
            <p className="text-lg sm:text-xl text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 text-center backdrop-filter backdrop-blur-sm hover:shadow-xl transition duration-300">
    <div className="flex justify-center mb-4">
      <Icon className="h-12 w-12 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-100">{description}</p>
  </div>
);

const TechCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
    <div className="flex justify-center mb-4">
      <Icon className="h-12 w-12 text-emerald-600" />
    </div>
    <h3 className="text-xl font-semibold text-emerald-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ApplicationCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
    <div className="flex-shrink-0">
      <Icon className="h-12 w-12 text-emerald-600" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-emerald-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default LandingPage;