import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Mayankk05', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/mayank-kashyap-a6a03630a/', label: 'LinkedIn' },
  { icon: HiMail, href: 'mailto:kashyap05mayank@gmail.com', label: 'Email' },
]

export default function Footer({ darkMode }) {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const accent = '#14B8A6'
  const bg = darkMode ? '#0F172A' : '#F8FAFC'
  const textMuted = darkMode ? '#64748B' : '#94A3B8'
  const textSub = darkMode ? '#94A3B8' : '#64748B'
  const border = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
  const iconBg = darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
  const iconBorder = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'

  return (
    <footer style={{ background: bg, borderTop: `1px solid ${border}`, position: 'relative' }}>
      {/* Top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: `linear-gradient(90deg, transparent, ${accent}55 40%, ${accent}55 60%, transparent)`,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Main row */}
        <div className="footer-main-row" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '22px 0 18px', flexWrap: 'wrap', gap: '12px',
          rowGap: '16px',
        }}>
          {/* Logo */}
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            whileHover={{ scale: 1.05 }}
            style={{ textDecoration: 'none', flexShrink: 0 }}
          >
            <span style={{
              fontSize: '20px', fontWeight: '800',
              background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>M/K</span>
          </motion.a>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                style={{
                  fontSize: '13px', color: textSub, textDecoration: 'none',
                  padding: '5px 10px', borderRadius: '6px',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.target.style.color = accent
                  e.target.style.background = darkMode ? 'rgba(20,184,166,0.08)' : 'rgba(20,184,166,0.06)'
                }}
                onMouseLeave={e => {
                  e.target.style.color = textSub
                  e.target.style.background = 'transparent'
                }}
              >{link.name}</a>
            ))}
          </nav>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            {socialLinks.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '34px', height: '34px', borderRadius: '9px',
                  background: iconBg, border: `1px solid ${iconBorder}`,
                  color: textSub, textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = accent
                  e.currentTarget.style.background = darkMode ? 'rgba(20,184,166,0.1)' : 'rgba(20,184,166,0.08)'
                  e.currentTarget.style.borderColor = `${accent}55`
                  e.currentTarget.style.boxShadow = `0 0 12px ${accent}33`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = textSub
                  e.currentTarget.style.background = iconBg
                  e.currentTarget.style.borderColor = iconBorder
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <s.icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${border}`,
          padding: '10px 0 14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <p style={{ margin: 0, fontSize: '12px', color: textMuted }}>
            © 2026 Mayank Kashyap — Built with React
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .footer-main-row {
            justify-content: center !important;
          }
          .footer-main-row > * {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .footer-main-row nav {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}
