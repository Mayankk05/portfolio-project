export default function SectionHeading({ title, subtitle, darkMode, align = 'center' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        darkMode ? 'text-white' : 'text-dark-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
          darkMode ? 'text-dark-400' : 'text-dark-500'
        }`}>
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center gap-2 justify-center">
        <div className="h-0.5 w-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full" />
        <div className="h-0.5 w-6 bg-primary-500/20 rounded-full" />
        <div className="h-0.5 w-3 bg-primary-500/10 rounded-full" />
      </div>
    </div>
  )
}
