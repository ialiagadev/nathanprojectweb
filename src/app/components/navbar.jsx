"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItem = ({ href, children, isActive = false, isLast = false }) => (
    <Link 
      href={href} 
      className={`
        flex-1 py-3 px-2 text-center relative group
        ${isActive ? 'font-bold text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}
        transition-all duration-300 ease-in-out
        ${isLast ? 'rounded-r-full' : ''}
      `}
    >
      {children}
      {!isLast && (
        <span className="absolute top-1/2 -right-[1px] h-4 w-[1px] bg-gradient-to-b from-transparent via-gray-600 to-transparent"></span>
      )}
    </Link>
  )
  

const Navbar = () => {
  const pathname = usePathname()
  const [navbarPosition, setNavbarPosition] = useState('bottom')

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 100) {
        setNavbarPosition('top')
      } else {
        setNavbarPosition('bottom')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`
      fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4
      ${navbarPosition === 'top' ? 'top-4' : 'bottom-4'}
      flex justify-center
    `}>
      <nav className="h-12 w-full max-w-[500px] flex items-center justify-between px-4 bg-black/30 rounded-xl border border-white/20 relative overflow-hidden backdrop-blur-md shadow-lg">
        <NavItem href="/" isActive={pathname === '/'}>Home</NavItem>
        <NavItem href="/about" isActive={pathname === '/about'}>About us</NavItem>
        <NavItem href="/partnership" isActive={pathname === '/partnership'}>Partnership</NavItem>
        <NavItem href="/contact" isActive={pathname === '/contact'} isLast={true}>Get in Touch</NavItem>
      </nav>
    </div>
  )
  
}

export default Navbar