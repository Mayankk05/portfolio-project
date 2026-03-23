import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { HiServer, HiCode, HiCog } from 'react-icons/hi'
import { FaJava, FaReact, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiJavascript, SiPython, SiPostman, SiJsonwebtokens, SiTailwindcss } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Backend Development',
    subtitle: 'Built 3 production-ready backends',
    icon: HiServer,
    gradient: 'from-primary-500 to-primary-600',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, bg: 'bg-green-500/8', text: 'text-green-400', border: 'border-green-500/15' },
      { name: 'Java', icon: FaJava, bg: 'bg-orange-500/8', text: 'text-orange-400', border: 'border-orange-500/15' },
      { name: 'MySQL', icon: SiMysql, bg: 'bg-blue-500/8', text: 'text-blue-400', border: 'border-blue-500/15' },
      { name: 'REST APIs', icon: HiServer, bg: 'bg-purple-500/8', text: 'text-purple-400', border: 'border-purple-500/15' },
      { name: 'JWT Auth', icon: SiJsonwebtokens, bg: 'bg-pink-500/8', text: 'text-pink-400', border: 'border-pink-500/15' },
    ],
  },
  {
    title: 'Frontend Development',
    subtitle: 'Created responsive SPAs with modern UI',
    icon: HiCode,
    gradient: 'from-accent-400 to-accent-500',
    skills: [
      { name: 'React.js', icon: FaReact, bg: 'bg-cyan-500/8', text: 'text-cyan-400', border: 'border-cyan-500/15' },
      { name: 'JavaScript', icon: SiJavascript, bg: 'bg-yellow-500/8', text: 'text-yellow-400', border: 'border-yellow-500/15' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, bg: 'bg-sky-500/8', text: 'text-sky-400', border: 'border-sky-500/15' },
      { name: 'HTML5', icon: FaHtml5, bg: 'bg-orange-500/8', text: 'text-orange-400', border: 'border-orange-500/15' },
      { name: 'CSS3', icon: FaCss3Alt, bg: 'bg-blue-500/8', text: 'text-blue-400', border: 'border-blue-500/15' },
    ],
  },
  {
    title: 'Tools & DevOps',
    subtitle: 'Version control, containerization, API testing',
    icon: HiCog,
    gradient: 'from-dark-500 to-dark-600',
    skills: [
      { name: 'Git', icon: FaGitAlt, bg: 'bg-red-500/8', text: 'text-red-400', border: 'border-red-500/15' },
      { name: 'Docker', icon: FaDocker, bg: 'bg-blue-500/8', text: 'text-blue-400', border: 'border-blue-500/15' },
      { name: 'Postman', icon: SiPostman, bg: 'bg-orange-500/8', text: 'text-orange-400', border: 'border-orange-500/15' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Skills({ darkMode }) {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Technical Skills"
        subtitle="Technologies and tools I work with to bring ideas to life"
        darkMode={darkMode}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className={`group relative p-5 md:p-8 rounded-2xl transition-all duration-500 ${
              darkMode
                ? 'glass-card hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/5'
                : 'bg-white border border-dark-200 shadow-sm hover:shadow-xl'
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient} text-white`}>
                <category.icon size={20} />
              </div>
              <h3 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-dark-800'}`}>
                {category.title}
              </h3>
            </div>

            {/* Subtitle */}
            <p className={`text-xs font-light mb-5 ml-0 sm:ml-[52px] ${
              darkMode ? 'text-dark-500' : 'text-dark-400'
            }`}>
              {category.subtitle}
            </p>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border cursor-default transition-all duration-300 ${
                    darkMode
                      ? `${skill.bg} ${skill.border} hover:shadow-md`
                      : 'bg-dark-50 border-dark-200 hover:bg-dark-100 hover:shadow-md'
                  }`}
                >
                  <skill.icon className={darkMode ? skill.text : 'text-dark-600'} size={15} />
                  <span className={`text-xs font-medium ${darkMode ? 'text-dark-200' : 'text-dark-700'}`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
