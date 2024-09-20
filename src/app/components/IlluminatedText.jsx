"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
});

const Word = ({ children, progress }) => {
  const opacity = useTransform(progress, [0, 0.5, 1], [0, 0.2, 1]);
  const textGlow = useTransform(progress, [0, 0.5, 1], [
    '0 0 0px rgba(255, 255, 255, 0)',
    '0 0 10px rgba(255, 255, 255, 0.5)',
    '0 0 30px rgba(255, 255, 255, 1)',
  ]);

  return (
    <motion.span
      style={{
        opacity,
        textShadow: textGlow,
        display: 'inline-block',
        marginRight: '0.25em',
      }}
    >
      {children}
    </motion.span>
  );
};

const IlluminatedText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = [
    "Somos", "un", "equipo", "de", "expertos",
    "en", "finanzas", "personales",
    "y", "estrategias", "de", "inversión"
  ];

  const startDelay = 0.15; // Retraso inicial antes de que comience la animación
  const totalDuration = 0.45; // Duración total de la animación en términos de scroll progress
  const wordDuration = totalDuration / words.length;

  const wordProgresses = words.map((_, i) =>
    useTransform(
      scrollYProgress,
      [startDelay + i * wordDuration, startDelay + (i + 1) * wordDuration, 1],
      [0, 1, 1]
    )
  );

  return (
    <div ref={containerRef} className="py-20 sm:py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={`${raleway.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight text-white`}>
            {words.map((word, index) => (
              <Word key={index} progress={wordProgresses[index]}>
                {word}
              </Word>
            ))}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default IlluminatedText;
