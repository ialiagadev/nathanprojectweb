'use client'

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const FormularioCorreo = () => {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbypSlnbPh5XRYjWujl3PrEjYvqGTuPwQy4b9_CVwQl1VwAijoZRCtYaEuaKmORR_DHPZg/exec', {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();
      setMensaje(result);
      setEmail('');
    } catch (error) {
      setMensaje('Hubo un error al enviar el correo');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-black via-orange-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16  text-center">Suscríbete a nuestras novedades</h2>
          <form onSubmit={manejarEnvio} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-2/3 max-w-2xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
                placeholder="Tu correo electrónico"
              />
            </div>
            <button 
              type="submit" 
              className={`w-full md:w-auto py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 ease-in-out
                bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900
                flex items-center justify-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  Enviar <FaPaperPlane className="ml-2" />
                </>
              )}
            </button>
          </form>
          {mensaje && (
            <div className={`mt-6 p-4 rounded-lg text-center max-w-2xl mx-auto ${
              mensaje.includes('error') ? 'bg-red-500/20 text-red-100' : 'bg-white/10 backdrop-blur-sm text-white'
            }`}>
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormularioCorreo;