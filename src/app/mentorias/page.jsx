import React from 'react';
import { FaCheck, FaFire } from 'react-icons/fa';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
})

const PricingCard = ({ title, price, features = [], isPopular }) => (
  <div className={`
    relative overflow-hidden
    bg-white/10 backdrop-blur-sm
    rounded-lg shadow-xl p-8
    ${isPopular ? 'border-2 border-orange-500' : 'border border-white/20'}
    transform hover:scale-105 transition-all duration-300 ease-in-out
    hover:shadow-2xl hover:shadow-white/10
  `}>
    {isPopular && (
      <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg flex items-center">
        <FaFire className="mr-1" /> POPULAR
      </span>
    )}
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="text-4xl font-bold text-orange-500 mb-6">
        €{price}<span className="text-lg font-normal text-gray-400"></span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <FaCheck className="text-orange-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`
        w-full py-3 px-6 rounded-lg font-bold text-lg
        transition-all duration-300 ease-in-out
        ${isPopular
          ? 'bg-orange-500 text-white hover:bg-orange-600'
          : 'bg-white/10 text-white hover:bg-white/20'}
        relative overflow-hidden
      `}>
        Comenzar ahora
      </button>
    </div>
  </div>
);

const Mentorias = () => {
  const plans = [
    {
      title: "Telegram VIP",
      price: 40,
      features: [
        "2 sesiones de mentoría al mes",
        "Acceso a recursos básicos",
        "Soporte por email",
      ],
      isPopular: false
    },
    {
      title: "Programa Mentorias",
      price: 380,
      features: [
        
        "Acceso a todos los recursos",
        "Soporte prioritario 24/7",
        "Acceso a comunidad privada",
      ],
      isPopular: true
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-orange-900 to-black">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22%23f97316%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M0 0h100v100H0z%22/%3E%3Cpath d=%22M0 0h50v50H0zM50 50h50v50H50z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative">
        <h1 className={`text-5xl font-extralight text-center text-white mb-4 ${raleway.className}`}>
           PROGRAMA DE MENTORÍAS
        </h1>

          <p className="text-xl text-center text-gray-300 mb-12">
            Impulsa tu carrera con mentorías personalizadas de expertos en la industria
          </p>

          {/* Espacio para el video */}
          <div className="aspect-w-16 aspect-h-9 mb-16 relative overflow-hidden rounded-lg">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
              Video de presentación (por añadir)
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-20"></div>
          </div>

          {/* Tarjetas de precios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          {/* Elemento decorativo */}
          <div className="mt-16 text-center">
            <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold animate-pulse">
              ¡Plazas limitadas!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorias;