'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { toast, Toaster } from 'react-hot-toast'
import { Send } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/pages/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast.success('Mensagem enviada com sucesso!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        toast.error('Erro ao enviar mensagem. Tente novamente.')
      }
    } catch (err) {
      console.error('Error occurred while sending the message:', err) // Log the error
      toast.error('Erro de conexão. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full h-full mx-auto py-16 px-6 bg-white rounded-lg shadow-md">
      <Toaster position="bottom-right" />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl text-gray-900 text-center font-semibold mb-6">Estamos Aqui para Ajudar!</h2>
        
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
          required
          whileFocus={{ scale: 1.02 }}
          className="w-full p-2 border rounded"
        />
        
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          whileFocus={{ scale: 1.02 }}
          className="w-full p-2 border rounded"
        />
        
        <motion.input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Telefone"
          className="w-full p-2 border rounded"
        />
        
        <motion.input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Assunto"
          required
          whileFocus={{ scale: 1.02 }}
          className="w-full p-2 border rounded"
        />
        
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensagem"
          required
          whileFocus={{ scale: 1.02 }}
          className="w-full p-2 border rounded h-32"
        />
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors"
        >
          <Send className="mr-2" />
          Enviar Mensagem
        </motion.button>
        
      </motion.form>
    </div>
  )
}
