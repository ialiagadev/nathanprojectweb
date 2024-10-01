"use client"

import React, { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    
    // Aquí iría la lógica para enviar el formulario, por ejemplo, una llamada a una API
    alert("Gracias por contactarnos. Te responderemos pronto.")

    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <div className="min-h-screen p-8 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Fondo con gradiente y efectos */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-black to-orange-800 opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,103,0,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cpath%20fill%3D%22%23FF6700%22%20d%3D%22M0%200h1000v1000H0z%22%20opacity%3D%22.05%22%2F%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M0%200h1000v1000H0z%22%20opacity%3D%22.1%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
      </div>

      <div className="w-full max-w-md bg-black bg-opacity-50 border border-orange-500 rounded-lg p-8 relative z-10 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-orange-300 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-black bg-opacity-50 border border-orange-700 rounded-md text-white placeholder-orange-300 placeholder-opacity-50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-orange-300 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-black bg-opacity-50 border border-orange-700 rounded-md text-white placeholder-orange-300 placeholder-opacity-50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-orange-300 mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-black bg-opacity-50 border border-orange-700 rounded-md text-white placeholder-orange-300 placeholder-opacity-50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              rows={4}
              placeholder="Tu mensaje aquí..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-orange-600 to-orange-800 text-white font-bold rounded-md hover:from-orange-700 hover:to-orange-900 transition-all duration-300 transform hover:scale-105"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  )
}