import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { HiAcademicCap, HiCalendar } from 'react-icons/hi'

const educationData = [
  {
    institution: 'DIT University',
    degree: 'BTech — Information Technology',
    period: '2022 – 2026',
    score: 'CGPA: 7.11',
    icon: '🎓',
    current: true,
  },
  {
    institution: 'CBSE — Class XII',
    degree: 'Senior Secondary Education',
    period: '2022',
    score: '76.3%',
    icon: '📚',
    current: false,
  },
  {
    institution: 'CBSE — Class X',
    degree: 'Secondary Education',
    period: '2020',
    score: '92%',
    icon: '🏫',
    current: false,
  },
]

export default function Education({ darkMode }) {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        title="Education"
        subtitle="My academic journey and qualifications"
        darkMode={darkMode}
      />

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-dark-800' : 'bg-dark-200'
          }`} />

          <div className="space-y-6">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-5 md:gap-7"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl md:text-2xl ${
                    edu.current
                      ? 'bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/25'
                      : darkMode
                        ? 'bg-dark-800 border border-dark-700'
                        : 'bg-white border border-dark-200 shadow-sm'
                  }`}>
                    {edu.icon}
                  </div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className={`flex-1 p-5 rounded-2xl transition-all duration-300 ${
                    darkMode
                      ? 'glass-card hover:border-primary-500/20'
                      : 'bg-white border border-dark-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className={`text-base md:text-lg font-bold ${darkMode ? 'text-white' : 'text-dark-900'}`}>
                        {edu.institution}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-dark-400' : 'text-dark-500'}`}>
                        {edu.degree}
                      </p>
                    </div>
                    {edu.current && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 shrink-0">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mt-3">
                    <span className={`flex items-center gap-1.5 text-xs ${
                      darkMode ? 'text-dark-500' : 'text-dark-400'
                    }`}>
                      <HiCalendar size={14} />
                      {edu.period}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold ${
                      darkMode
                        ? 'bg-primary-500/10 text-primary-400'
                        : 'bg-primary-50 text-primary-600'
                    }`}>
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
