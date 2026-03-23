import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiDownload } from 'react-icons/hi'
import { HiArrowDown } from 'react-icons/hi2'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Mayankk05', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/mayank-kashyap-a6a03630a/', label: 'LinkedIn' },
  { icon: HiOutlineMail, href: 'mailto:kashyap05mayank@gmail.com', label: 'Email' },
]

export default function Hero({ darkMode }) {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient blobs */}
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[100px] opacity-20 animate-blob ${
          darkMode ? 'bg-primary-500' : 'bg-primary-300'
        }`} />
        <div className={`absolute top-1/3 -left-40 w-80 h-80 rounded-full blur-[100px] opacity-15 animate-blob ${
          darkMode ? 'bg-accent-500' : 'bg-accent-400'
        }`} style={{ animationDelay: '2s' }} />
        <div className={`absolute -bottom-20 right-1/4 w-72 h-72 rounded-full blur-[100px] opacity-10 animate-blob ${
          darkMode ? 'bg-primary-400' : 'bg-primary-200'
        }`} style={{ animationDelay: '4s' }} />

        {/* Subtle dot grid pattern */}
        <div className={`absolute inset-0 ${darkMode ? 'opacity-[0.04]' : 'opacity-[0.03]'}`}
          style={{
            backgroundImage: `radial-gradient(circle, ${darkMode ? 'rgba(16,185,129,0.5)' : 'rgba(16,185,129,0.3)'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Geometric shapes */}
        <div className={`geo-shape w-64 h-64 top-20 right-1/4 ${darkMode ? 'bg-primary-500 opacity-[0.03]' : 'bg-primary-400 opacity-[0.02]'}`} />
        <div className={`geo-shape w-40 h-40 bottom-40 left-1/3 ${darkMode ? 'bg-accent-500 opacity-[0.03]' : 'bg-accent-400 opacity-[0.02]'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            darkMode
              ? 'bg-primary-500/10 text-primary-400 border border-primary-500/15'
              : 'bg-primary-50 text-primary-600 border border-primary-200'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-lg md:text-xl mb-3 font-light ${
            darkMode ? 'text-dark-400' : 'text-dark-500'
          }`}
        >
          Hi there, I'm 👋
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 ${
            darkMode ? 'text-white' : 'text-dark-800'
          }`}
        >
          Mayank{' '}
          <span className="text-gradient">Kashyap</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={`text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-4 ${
            darkMode ? 'text-dark-300' : 'text-dark-600'
          }`}
        >
          Full-Stack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className={`text-base md:text-lg max-w-2xl mx-auto mb-12 font-light ${
            darkMode ? 'text-dark-400' : 'text-dark-500'
          }`}
        >
          Building production-ready web applications with modern technologies
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.button
            onClick={() => scrollTo('#projects')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-all duration-300 w-full sm:w-auto"
          >
            View Projects
          </motion.button>
          <motion.a
            href="https://docs.google.com/document/d/14sLACcGRveg0geZ8O7e6flYbwi19giMn/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center gap-2 px-8 py-3.5 font-medium rounded-xl border transition-all duration-300 w-full sm:w-auto ${
              darkMode
                ? 'border-dark-700 text-dark-300 hover:border-primary-500 hover:text-primary-400'
                : 'border-dark-300 text-dark-600 hover:border-primary-500 hover:text-primary-600'
            }`}
          >
            <HiDownload size={18} />
            Download Resume
          </motion.a>
          <motion.button
            onClick={() => scrollTo('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3.5 font-medium rounded-xl border transition-all duration-300 w-full sm:w-auto ${
              darkMode
                ? 'border-dark-700 text-dark-300 hover:border-primary-500 hover:text-primary-400'
                : 'border-dark-300 text-dark-600 hover:border-primary-500 hover:text-primary-600'
            }`}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-dark-800/40 text-dark-400 hover:text-primary-400 hover:bg-dark-800/80'
                  : 'bg-dark-100 text-dark-500 hover:text-primary-600 hover:bg-dark-200'
              }`}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollTo('#about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className={`p-2 rounded-full ${darkMode ? 'text-dark-500' : 'text-dark-400'}`}
            aria-label="Scroll down"
          >
            <HiArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
