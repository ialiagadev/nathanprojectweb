'use client'

import React, { useState } from 'react'

export default function PartnershipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
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
    
    const phoneNumber = '1234567890' // Reemplaza esto con tu número de WhatsApp
    const message = `Nueva solicitud de partnership:
Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Mensaje: ${formData.message}`

    try {
      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, message }),
      })

      if (response.ok) {
        alert('Solicitud enviada con éxito')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-700 via-black to-black text-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 leading-tight">
          Impulsa tu negocio<br />con nuestros<br /><span className="text-orange-400">socios y afiliados</span>
        </h1>

        <section className="mb-24 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">¿Por qué ser nuestro socio?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Acceso a tecnología de vanguardia",
              "Soporte técnico prioritario",
              "Oportunidades de co-marketing",
              "Formación exclusiva para partners"
            ].map((benefit, index) => (
              <div key={index} className="bg-white/30 border-none shadow-lg hover:bg-white/40 transition-colors p-6 rounded-lg">
                <p className="text-lg font-medium text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-md mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Solicita ser Partner</h2>
          <div className="bg-white/30 border-none shadow-lg rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  id="name" 
                  name="name" 
                  placeholder="Nombre" 
                  required 
                  className="w-full px-3 py-2 bg-white/50 border-none text-black placeholder-gray-600 rounded-md" 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Email" 
                  required 
                  className="w-full px-3 py-2 bg-white/50 border-none text-black placeholder-gray-600 rounded-md" 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input 
                  id="company" 
                  name="company" 
                  placeholder="Empresa" 
                  required 
                  className="w-full px-3 py-2 bg-white/50 border-none text-black placeholder-gray-600 rounded-md" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Mensaje" 
                  rows={4} 
                  className="w-full px-3 py-2 bg-white/50 border-none text-black placeholder-gray-600 rounded-md" 
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}