'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link' // Importamos Link para los enlaces
import primext from '../images/primexbt.jpg'
import blofin from '../images/blofinlogo.jpg'

const partners = [
  { 
    name: "Blofin", 
    logo: blofin,
    url: "https://bit.ly/4dRGijN" // Enlace de Blofin
  },
  { 
    name: "Prime XBT", 
    logo: primext,
    url: "https://u.primexbt.com/CryptoTwitch" // Enlace de Prime XBT
  },
]

export default function Partnerscroll() {
  const controls = useAnimation()
  const containerRef = useRef(null)

  useEffect(() => {
    const animateScroll = async () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth / 2 // El ancho total dividido a la mitad

        await controls.start({
          x: [0, -scrollWidth],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Aumentamos la duración para un desplazamiento más suave
              ease: "linear",
            },
          },
        })
      }
    }

    animateScroll()
  }, [controls])

  return (
    <div className="w-full bg-black text-white p-8 overflow-hidden">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Nuestros Partners
      </h2>
      <div className="relative w-full h-24 overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex whitespace-nowrap h-full"
          animate={controls}
          style={{ x: 0 }}
        >
          {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((partner, index) => ( // Duplicamos 4 veces
            <div
              key={index}
              className="flex items-center justify-center h-full"
              style={{ width: '250px', paddingRight: '20px' }} // Añadimos padding
            >
              <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                <div className="w-48 h-24 relative">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    layout="fill"
                    objectFit="contain"
                    className="max-w-full max-h-full"
                  />
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
