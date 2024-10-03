import React, { useState } from 'react';
import { Leaf, Upload, Send } from 'lucide-react';
import Header from '../components/header'; 
import Footer from '../components/footer'; 

const LandscapeGenerator = () => {
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer l'image et la description à votre API
    console.log('Image:', image);
    console.log('Description:', description);
  };

  return (
    <div className="min-h-screen bg-gray-50">
    <Header/>

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Générez votre paysage</h1>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <div className="mb-6">
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                Téléchargez une image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                      <span>Télécharger un fichier</span>
                      <input id="image" name="image" type="file" className="sr-only" onChange={handleImageChange} />
                    </label>
                    <p className="pl-1">ou glissez-déposez</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={4}
                placeholder="Décrivez le paysage que vous souhaitez générer..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Générer le paysage
              </button>
            </div>
          </form>
        </div>
      </main>

    <Footer/>
    </div>
  );
};

export default LandscapeGenerator;