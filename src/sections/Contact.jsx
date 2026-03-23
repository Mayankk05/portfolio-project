import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'kashyap05mayank@gmail.com',
    href: 'mailto:kashyap05mayank@gmail.com',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/mayank-kashyap-a6a03630a/',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'View my repos',
    href: 'https://github.com/Mayankk05',
    color: 'from-gray-600 to-gray-800',
  },
]

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '45f9326a-dfdf-44fd-b9f2-328eb5670023', // ← Replace with your key from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
        }),
      })

      const data = await response.json()
      if (data.success) {
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Let's Build Something Together"
        subtitle="Open to collaborations, freelance projects, and full-time opportunities"
        darkMode={darkMode}
      />

      {/* Status banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`max-w-2xl mx-auto mb-12 p-4 rounded-2xl text-center text-sm font-medium ${darkMode
          ? 'bg-accent-500/10 text-accent-400 border border-accent-500/20'
          : 'bg-accent-50 text-accent-700 border border-accent-200'
          }`}
      >
        🚀 Currently seeking internship and full-time opportunities
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-dark-900'}`}>
            Get in Touch
          </h3>
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${darkMode
                ? 'glass-card hover:border-primary-500/20'
                : 'bg-white border border-dark-200 shadow-sm hover:shadow-md hover:border-primary-200'
                }`}
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <info.icon size={20} />
              </div>
              <div>
                <p className={`text-xs font-medium ${darkMode ? 'text-dark-500' : 'text-dark-400'}`}>
                  {info.label}
                </p>
                <p className={`text-sm font-semibold ${darkMode ? 'text-dark-200' : 'text-dark-700'}`}>
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-dark-900'}`}>
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-dark-300' : 'text-dark-600'
                }`}>
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 ${darkMode
                  ? 'bg-dark-800/50 border border-dark-700 text-white placeholder-dark-500 focus:bg-dark-800'
                  : 'bg-dark-50 border border-dark-200 text-dark-900 placeholder-dark-400 focus:bg-white'
                  }`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-dark-300' : 'text-dark-600'
                }`}>
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 ${darkMode
                  ? 'bg-dark-800/50 border border-dark-700 text-white placeholder-dark-500 focus:bg-dark-800'
                  : 'bg-dark-50 border border-dark-200 text-dark-900 placeholder-dark-400 focus:bg-white'
                  }`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-dark-300' : 'text-dark-600'
                }`}>
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${darkMode
                  ? 'bg-dark-800/50 border border-dark-700 text-white placeholder-dark-500 focus:bg-dark-800'
                  : 'bg-dark-50 border border-dark-200 text-dark-900 placeholder-dark-400 focus:bg-white'
                  }`}
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 25px rgba(99, 102, 241, 0.3)' } : {}}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              disabled={status !== 'idle'}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${status === 'sent'
                ? 'bg-green-500 text-white'
                : status === 'error'
                  ? 'bg-red-500 text-white'
                  : status === 'sending'
                    ? 'bg-primary-500/70 text-white cursor-wait'
                    : 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40'
                }`}
            >
              {status === 'sent' ? (
                <>✓ Message Sent!</>
              ) : status === 'error' ? (
                <>✕ Failed to send. Try again.</>
              ) : status === 'sending' ? (
                <>Sending...</>
              ) : (
                <>
                  <FaPaperPlane size={14} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
