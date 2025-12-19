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
    <footer className="bg-dark-secondary border-t border-white/10">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <Icon className="text-xl" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Made with <span className="text-neon-pink">❤️</span> by Gaurav Ghadge
            </p>
            <p className="text-gray-500 text-xs mt-1">
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


