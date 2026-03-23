import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { FaAws, FaJava, FaExternalLinkAlt } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'
import { HiShieldCheck, HiBadgeCheck } from 'react-icons/hi'

const certifications = [
  {
    title: 'null',
    code: 'null',
    issuer: 'nulll',
    icon: FaAws,
    iconColor: '#ff9900',
    gradient: 'from-orange-500 to-yellow-500',
    description: 'null',
    bgPattern: 'radial-gradient(circle at 20% 50%, rgba(255,153,0,0.08) 0%, transparent 50%)',
  },
  {
    title: 'null',
    code: 'Skill Assessment',
    issuer: 'null',
    icon: SiHackerrank,
    iconColor: '#2ec866',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Demonstrated proficiency in Java programming including OOP, data structures, and algorithms.',
    link: ' null',
    bgPattern: 'radial-gradient(circle at 80% 50%, rgba(46,200,102,0.08) 0%, transparent 50%)',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Certifications({ darkMode }) {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        title="Certifications"
        subtitle="Professional credentials validating my technical expertise"
        darkMode={darkMode}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className={`group relative p-6 lg:p-8 rounded-2xl overflow-hidden transition-all duration-500 ${darkMode
              ? 'glass-card hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10'
              : 'bg-white border border-dark-200 shadow-sm hover:shadow-xl hover:border-primary-300'
              }`}
            style={{ backgroundImage: cert.bgPattern }}
          >
            {/* Badge icon */}
            <div className="flex items-start justify-between mb-6">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.gradient} text-white shadow-lg`}>
                <cert.icon size={28} />
              </div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className={`${darkMode ? 'text-primary-400' : 'text-primary-500'}`}
              >
                <HiBadgeCheck size={32} />
              </motion.div>
            </div>

            {/* Content */}
            <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-dark-900'}`}>
              {cert.title}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-mono px-2 py-0.5 rounded ${darkMode ? 'bg-dark-800 text-dark-400' : 'bg-dark-100 text-dark-500'
                }`}>
                {cert.code}
              </span>
              <span className={`text-sm ${darkMode ? 'text-dark-400' : 'text-dark-500'}`}>
                {cert.issuer}
              </span>
            </div>
            <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-dark-400' : 'text-dark-500'}`}>
              {cert.description}
            </p>

            {/* Verify link */}
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${darkMode ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'
                }`}
            >
              <HiShieldCheck size={16} />
              Verify Credential
              <FaExternalLinkAlt size={10} />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
