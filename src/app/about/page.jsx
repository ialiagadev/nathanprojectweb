'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, BookOpen } from 'lucide-react'
import { Raleway } from 'next/font/google'
import Component from '../components/partnerscroll'
import Partnerscroll from '../components/partnerscroll'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '400', '700'], 
})

const services = [
  { icon: TrendingUp, title: 'Directos Formativos', description: 'Todas nuestras clases en directo para no perderte nada' },
  { icon: DollarSign, title: 'Análisis Financiero', description: 'Evaluación profunda de oportunidades de inversión' },
  { icon: BookOpen, title: 'Mentoría Personalizada', description: 'Guía experta para alcanzar tus objetivos financieros' },
]

export default function AboutMe() {
  const memoizedServices = useMemo(() => services, [])

  return (
    <div className={`${raleway.className} min-h-screen bg-gradient-to-b from-orange-700 via-black to-black text-white p-8 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none noise-background"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
  <motion.h1
    className={`${raleway.className} text-4xl sm:text-5xl md:text-6xl font-extralight mb-8 text-center`} // Usar font-extralight
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Experto en Finanzas y Criptoactivos
  </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <InfoCard
            
            title="Mi Trayectoria"
            content="Profesional titulado en financiación de empresas y análisis contable y financiero con más de 6 años de experiencia. Especializado en especulación e inversión, con un enfoque particular en criptoactivos durante los últimos 4 años, manteniendo rentabilidad incluso en tiempos de alta volatilidad."
          />
          <InfoCard
           
            title="Mi Enfoque"
            content="Me dedico a compartir abiertamente mis resultados y estrategias ganadoras a través de mis redes sociales, creando un espacio de confianza y transparencia. Mi objetivo es ofrecer soluciones probadas y rentables que permitan a mis seguidores optimizar sus inversiones y navegar con éxito en el mercado financiero actual."
          />
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">Mis Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {memoizedServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">¿Listo para Optimizar tus Inversiones?</h2>
          <motion.button
            className="relative inline-block px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full shadow-md hover:bg-white/30 transition-colors duration-300 text-white text-lg font-medium border border-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicita tu Mentoría
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          </motion.button>
        </motion.div>
      </div>
      <style jsx global>{`
        .noise-background {
          background-image: url("data:image/png;base64,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");
        }
          
      `}
      
      </style>
    </div>
  )
}

const InfoCard = ({ icon: Icon, title, content }) => (
  <motion.div
    className="bg-white/10 p-6 rounded-lg backdrop-filter backdrop-blur-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 flex items-center">
     {title}
    </h2>
    <p className="text-base sm:text-lg">{content}</p>
  </motion.div>
)

const ServiceCard = ({ service }) => (
  <motion.div
    className="bg-white/10 p-6 rounded-lg backdrop-filter backdrop-blur-lg text-center"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <service.icon className="w-12 h-12 mx-auto mb-4 text-orange-300" />
    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
    <p>{service.description}</p>
  </motion.div>
)