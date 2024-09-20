"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Word = ({ children, progress }) => {
  const opacity = useTransform(progress, [0, 0.5, 1], [0.2, 0.5, 1])

  return (
    <motion.span
      style={{
        opacity,
        display: 'inline-block',
        marginRight: '0.25em',
      }}
    >
      {children}
    </motion.span>
  )
}

const IlluminatedText = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const words = [
    "Somos", "un", "equipo", "de", "expertos",
    "en", "finanzas", "personales",
    "y", "estrategias", "de", "inversión"
  ]

  const startDelay = 0.15
  const totalDuration = 0.45
  const wordDuration = totalDuration / words.length
  
  const wordProgresses = words.map((_, i) => 
    useTransform(
      scrollYProgress, 
      [startDelay + i * wordDuration, startDelay + (i + 1) * wordDuration, 1], 
      [0, 1, 1]
    )
  )

  return (
    <div ref={containerRef} className="py-20 sm:py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight text-white">
            {words.map((word, index) => (
              <Word key={index} progress={wordProgresses[index]}>
                {word}
              </Word>
            ))}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default IlluminatedText