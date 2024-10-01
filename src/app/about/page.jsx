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
    <div className={`${raleway.className} min-h-screen p-8 relative overflow-hidden`}>
      {/* Nuevo fondo con gradiente y efectos */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-black to-orange-800 opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,103,0,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cpath%20fill%3D%22%23FF6700%22%20d%3D%22M0%200h1000v1000H0z%22%20opacity%3D%22.05%22%2F%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M0%200h1000v1000H0z%22%20opacity%3D%22.1%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        <motion.h1
          className={`${raleway.className} text-4xl sm:text-5xl md:text-6xl font-extralight mb-8 text-center`}
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
    </div>
  )
}

const InfoCard = ({ title, content }) => (
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