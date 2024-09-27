'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import primext from '../images/primexbt.jpg'
import blofin from '../images/blofinlogo.jpg'

const partners = [
  { 
    name: "Blofin", 
    logo: blofin 
  },
  { 
    name: "Prime XBT", 
    logo: primext 
  },
]

export default function Partnerscroll() {
  const controls = useAnimation()
  const containerRef = useRef(null)

  useEffect(() => {
    const animateScroll = async () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth / 2 // Dividimos el ancho total del contenedor a la mitad (debido a la duplicación)

        await controls.start({
          x: [0, -scrollWidth], // Animamos el movimiento hasta la mitad del contenedor
          transition: {
            x: {
              repeat: Infinity, // Repetimos infinitamente
              repeatType: "loop", // Usamos el tipo de repetición en bucle
              duration: 20, // Tiempo total del scroll
              ease: "linear", // Movimiento lineal sin pausas
            },
          },
        })
      }
    }

    animateScroll()
  }, [controls])

  return (
    <div className="w-full bg-gradient-to-b from-orange-700 via-black to-black text-white p-8 overflow-hidden">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
        Powerful Connections
      </h2>
      <div className="relative w-full h-24 overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex whitespace-nowrap h-full"
          animate={controls}
          style={{ x: 0 }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-full"
              style={{ width: '250px' }}
            >
              <div className="w-48 h-24 relative">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          ))}

          {/* Duplicamos todo el contenido para lograr el efecto continuo */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index + partners.length} // Nos aseguramos de que las keys sean únicas
              className="flex items-center justify-center h-full"
              style={{ width: '250px' }}
            >
              <div className="w-48 h-24 relative">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
