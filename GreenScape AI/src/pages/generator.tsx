import React, { useState } from 'react';
import axios from 'axios';
import { Upload, Send, X } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';

const LandscapeGenerator = () => {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    if (!image) {
      setMessage("Veuillez sélectionner une image.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data?.error || "Une erreur s'est produite lors de l'envoi.");
      } else {
        setMessage("Une erreur inattendue s'est produite.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Générez votre paysage</h1>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <div className="mb-6">
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                Téléchargez une image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                {previewUrl ? (
                  <div className="relative w-full">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-w-full h-auto max-h-96 rounded mx-auto"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X size={20} />
                    </button>
                    <p className="mt-2 text-sm text-gray-500 text-center">{image?.name}</p>
                  </div>
                ) : (
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                        <span>Télécharger un fichier</span>
                        <input id="image" name="image" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                      </label>
                      <p className="pl-1">ou glissez-déposez</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                  </div>
                )}
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

            {message && (
              <div className={`mb-4 p-2 rounded ${message.includes('erreur') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {message}
              </div>
            )}

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className={`bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Envoi en cours...' : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Générer le paysage
                  </>
                )}
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