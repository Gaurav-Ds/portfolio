import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/er-gaurav-ghadge', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/gauravghadge', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:gghadge225@gmail.com', label: 'Email' },
    { icon: FaGlobe, href: 'https://gauravghadge.com', label: 'Portfolio' },
  ]

  return (
    <footer className="bg-dark-secondary border-t border-white/10" role="contentinfo">
      <div className="container-custom py-8 sm:py-10 md:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 gap-6">
          {/* Social Links - Mobile Optimized */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 glass-card flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300 active:scale-95 hover:scale-110 min-h-[44px] min-w-[44px]"
                  aria-label={link.label}
                >
                  <Icon className="text-lg sm:text-xl" aria-hidden="true" />
                </a>
              )
            })}
          </div>

          {/* Copyright - Mobile Optimized */}
          <div className="text-center sm:text-right">
            <p className="text-gray-400 text-sm sm:text-base">
              Made with <span className="text-neon-pink" aria-label="love">❤️</span> by Gaurav Ghadge
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Generative & Agentic AI Engineer · AI Consultant · Python Mentor
            </p>
            <p className="text-gray-600 text-xs mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


