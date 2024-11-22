import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: `Contact Form: ${subject}`,
        text: `
          Nome: ${name}
          Email: ${email}
          Contacto: ${phone}
          
          Mensagem:
          ${message}
        `
      })

      res.status(200).json({ message: 'Enviado com sucesso!' })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao enviar !' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}