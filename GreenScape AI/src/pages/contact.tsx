import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
     <Header/>
      <main className="py-20 ">
        <div className="container mx-auto px-4 mt-12">          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-emerald-700 text-white p-8">
                <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5" />
                    <span>+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5" />
                    <span>contact@greenscape-ai.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5" />
                    <span>123 Rue de l'Innovation, 13080 Aix-en-Provence</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Heures d'ouverture</h3>
                  <p>Lundi - Vendredi : 9h - 18h</p>
                  <p>Samedi - Dimanche : Fermé</p>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-semibold mb-6 text-emerald-800">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-emerald-700 transition duration-300 shadow-lg flex items-center justify-center"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;