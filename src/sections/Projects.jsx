import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiSpringboot, SiReact, SiMysql, SiJsonwebtokens } from 'react-icons/si'
import { HiStar, HiLightningBolt } from 'react-icons/hi'

const projects = [
  {
    title: 'Reco Read',
    featured: true,
    description: 'Full-stack reading companion with AI-powered summaries and concurrent user operations.',
    impact: 'Solved concurrent user data conflicts with optimistic locking',
    techStack: [
      { name: 'Spring Boot', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
      { name: 'React', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
      { name: 'MySQL', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      { name: 'Gemini AI', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
      { name: 'Google Books API', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
    ],
    features: [
      'Implemented optimistic locking (@Version) for race condition handling',
      'Integrated Google Books and Gemini APIs with rate limiting',
      'Built complete REST API with React SPA frontend',
    ],
    github: 'https://github.com/Mayankk05/Reco-Read',
    live: 'https://recoread.netlify.app/',
    image: '/projects/reco-read.png',
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    title: 'Mail Craft',
    featured: false,
    description: 'AI-powered email reply system with Gmail extension for seamless productivity.',
    impact: 'One-click AI-generated email replies boosting productivity',
    techStack: [
      { name: 'React.js', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
      { name: 'Spring Boot', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
      { name: 'Gemini API', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
      { name: 'Chrome Extension', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
    ],
    features: [
      'Modular RESTful backend architecture',
      'One-click AI-generated email replies',
      'Gmail extension for productivity enhancement',
    ],
    github: 'https://github.com/Mayankk05/MailCraft',
    live: null,
    gradient: 'from-accent-400 to-accent-500',
  },
  {
    title: 'Tiny Trail',
    featured: false,
    description: 'Full-stack URL shortener with real-time analytics dashboard and secure authentication.',
    impact: 'Real-time link analytics with secure JWT-based access',
    techStack: [
      { name: 'React', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
      { name: 'Spring Boot', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
      { name: 'JWT', color: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
      { name: 'Spring Security', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
      { name: 'Chart.js', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    ],
    features: [
      'Secure JWT-based authentication',
      'Real-time analytics dashboard with Chart.js',
      'Link management and performance tracking',
    ],
    github: 'https://github.com/Mayankk05/Tiny-Trail',
    live: 'https://tiny-trail.netlify.app/',
    image: '/projects/tiny-trail.png',
    gradient: 'from-dark-600 to-dark-800',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects({ darkMode }) {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="A curated selection of projects that showcase my expertise in full-stack development"
        darkMode={darkMode}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ${darkMode
              ? 'glass-card hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10'
              : 'bg-white border border-dark-200 shadow-sm hover:shadow-2xl hover:border-primary-300'
              }`}
          >
            {/* Project banner */}
            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <>
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <span className="text-4xl font-bold text-white/90 font-mono group-hover:scale-110 transition-transform duration-500">
                    {project.title.split(' ').map(w => w[0]).join('')}
                  </span>
                </>
              )}

              {/* Featured tag */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/90 text-dark-900 text-xs font-bold">
                  <HiStar size={12} />
                  Featured
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Title */}
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-dark-900'}`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-dark-400' : 'text-dark-500'}`}>
                {project.description}
              </p>

              {/* Impact */}
              <div className={`flex items-start gap-2 mb-4 px-3 py-2 rounded-lg text-xs ${darkMode ? 'bg-primary-500/5 text-primary-400' : 'bg-primary-50 text-primary-600'
                }`}>
                <HiLightningBolt className="mt-0.5 shrink-0" />
                <span>{project.impact}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {project.features.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-2 text-xs ${darkMode ? 'text-dark-400' : 'text-dark-500'
                    }`}>
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border ${darkMode ? tech.color : 'bg-dark-50 text-dark-600 border-dark-200'
                      }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-dark-200/10">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${darkMode
                    ? 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
                    : 'bg-dark-100 text-dark-600 hover:bg-dark-200 hover:text-dark-900'
                    }`}
                >
                  <FaGithub size={14} />
                  Code
                </motion.a>
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md shadow-primary-500/20 hover:shadow-primary-500/40 transition-shadow"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
