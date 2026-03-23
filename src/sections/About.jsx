import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { FaJava, FaReact, FaDocker, FaGitAlt, FaCloud } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiJavascript, SiPython } from 'react-icons/si'
import { HiAcademicCap, HiCode, HiLightBulb } from 'react-icons/hi'

const floatingIcons = [
  { icon: FaJava, color: '#f89820', delay: 0 },
  { icon: FaReact, color: '#61dafb', delay: 0.5 },
  { icon: SiSpringboot, color: '#6db33f', delay: 1 },
  { icon: SiJavascript, color: '#f7df1e', delay: 1.5 },
  { icon: SiMysql, color: '#4479a1', delay: 2 },
  { icon: FaDocker, color: '#2496ed', delay: 2.5 },
]

const interests = [
  { icon: FaDocker, label: 'Docker' },
  { icon: FaCloud, label: 'Cloud (AWS)' },
  { icon: HiCode, label: 'CI/CD' },
  { icon: HiLightBulb, label: 'System Design' },
]

export default function About({ darkMode }) {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Get to know me and my journey in software development"
        darkMode={darkMode}
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Photo / Avatar area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center overflow-visible"
        >
          <div className="relative mx-12 lg:mx-0">
            {/* Profile image — place your photo at public/profile.jpg */}
            <div className={`w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden ${
              darkMode ? 'bg-dark-800' : 'bg-dark-100'
            } shadow-2xl ring-4 ${darkMode ? 'ring-primary-500/20' : 'ring-primary-200'}`}>
              <img
                src="/profile.jpg"
                alt="Mayank Kashyap"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="w-full h-full items-center justify-center bg-gradient-to-br from-primary-500/20 to-accent-500/20 hidden">
                <HiAcademicCap className={`text-6xl ${darkMode ? 'text-primary-400' : 'text-primary-600'}`} />
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-500/15 -z-10" />

            {/* Floating tech icons */}
            {floatingIcons.map((item, i) => {
              const positions = [
                '-top-6 -left-6', '-top-4 right-8', 'top-12 -right-8',
                'bottom-12 -right-6', '-bottom-4 left-8', '-bottom-6 -left-4',
              ]
              return (
                <motion.div
                  key={i}
                  className={`absolute ${positions[i]} p-2.5 rounded-xl glass-card`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
                >
                  <item.icon style={{ color: item.color }} size={22} />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <div className={`space-y-4 text-base md:text-lg leading-relaxed ${
            darkMode ? 'text-dark-300' : 'text-dark-600'
          }`}>
            <p>
              I'm Mayank, a <span className="text-gradient font-semibold">full-stack developer</span> who builds
              web applications.
            </p>
            <p>
              I focus on creating backend systems that handle concurrent users, building
              secure REST endpoints, and implementing authentication that actually works.
              My recent work includes an AI-powered reading companion, email automation
              tools, and a URL shortener with real-time analytics.
            </p>
            <p>
              What drives me? <span className="text-gradient font-semibold">Solving real problems through code.</span> I
              love integrating APIs, building clean user interfaces, and architecting systems
              that scale. When I step away from the keyboard, you'll find me reading a good
              book or mapping out my goal to travel the world.
            </p>
          </div>

          {/* Currently Learning */}
          <div className={`p-5 rounded-2xl ${
            darkMode ? 'bg-dark-800/50 border border-dark-700/50' : 'bg-dark-50 border border-dark-200'
          }`}>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'text-primary-400' : 'text-primary-600'
            }`}>
              🚀 Currently Exploring
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                    darkMode ? 'hover:bg-dark-700/50' : 'hover:bg-dark-100'
                  }`}
                >
                  <item.icon className={`text-lg ${darkMode ? 'text-accent-400' : 'text-accent-600'}`} />
                  <span className={`text-sm font-medium ${darkMode ? 'text-dark-300' : 'text-dark-600'}`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
