"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Link from 'next/link'
import { Raleway } from 'next/font/google'
import { FaTwitch, FaYoutube, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'
import logo from './images/logo.jpg'
import IlluminatedText from './components/IlluminatedText'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
})

const FinancialNetwork = () => {
  const canvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const nodesRef = useRef([])

  const createNodes = useCallback((width, height) => {
    const nodeCount = 150
    return Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.8) * 0.4,
      vy: (Math.random() - 0.8) * 0.4,
    }))
  }, [])

  const drawNodes = useCallback((ctx, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    ctx.strokeStyle = 'rgba(255, 165, 0, 0.8)' // Mayor opacidad
    ctx.lineWidth = 1.5
    const maxDistance = 100

    nodesRef.current.forEach((node, i) => {
      node.x += node.vx
      node.y += node.vy

      if (node.x < 0 || node.x > width) node.vx *= -1
      if (node.y < 0 || node.y > height) node.vy *= -1

      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 3)
      gradient.addColorStop(0, 'rgba(255, 165, 0, 1)')
      gradient.addColorStop(1, 'rgba(255, 165, 0, 0)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
      ctx.fill()

      for (let j = i + 1; j < nodesRef.current.length; j++) {
        const otherNode = nodesRef.current[j]
        const dx = otherNode.x - node.x
        const dy = otherNode.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(otherNode.x, otherNode.y)
          ctx.stroke()
        }
      }
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setDimensions({ width: canvas.width, height: canvas.height })
      nodesRef.current = createNodes(canvas.width, canvas.height)
    }

    resizeCanvas()

    let animationFrameId

    const animate = () => {
      drawNodes(ctx, canvas.width, canvas.height)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', resizeCanvas)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [createNodes, drawNodes])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

const HeaderContent = ({ isMobile }) => {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef)
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div ref={headerRef} className={`mt-20 text-center ${isMobile ? 'pt-28' : ''}`}>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white font-extralight"
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Construyendo <span className="font-bold">tu</span>
      </motion.h1>

      <motion.p 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white font-extralight"
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="font-bold">futuro </span><span >financiero</span>
      </motion.p>

      <motion.p 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-white font-extralight"
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
       decision a decision
      </motion.p>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
       <Link 
  href="/contact" 
  className="relative inline-block px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full shadow-md hover:bg-white/30 transition-colors duration-300 text-white text-lg font-medium border border-white/30"
>
  MENTORIAS
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
</Link>

      </motion.div>
    </div>
  )
}

const SocialIcons = () => (
  <div className="absolute top-4 right-16 flex space-x-4 z-30">
    <Link href="https://www.twitch.tv/jordan_fdx" target="_blank" rel="noopener noreferrer">
      <FaTwitch className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
    </Link>
    <Link href="https://www.youtube.com/@JordanFDX" target="_blank" rel="noopener noreferrer">
      <FaYoutube className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
    </Link>
    <Link href="https://www.instagram.com/cryptocoach.psico?igsh=MXM4amgzdzI3enN3cQ==" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
    </Link>
  </div>
)

const LogoComponent = () => {
  return (
    <Link href="/" className="absolute top-4 left-16 flex items-center space-x-2 z-30">
      <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-white">
        <Image
            src={logo} // Ruta desde la carpeta public
            alt="Jordan Coach Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <span className="text-white text-lg font-semibold">Jordan Coach</span>
    </Link>
  )
}

export default function FinancialNetworkHeader() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className={`${raleway.className} relative min-h-screen overflow-hidden bg-gradient-to-b from-orange-700 via-black to-black`}>
      <FinancialNetwork />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <SocialIcons/>
      <LogoComponent/>
      <div className="relative z-20 flex flex-col justify-between min-h-screen p-4">
        <HeaderContent isMobile={isMobile} />
      </div>
    </header>
  )
}
