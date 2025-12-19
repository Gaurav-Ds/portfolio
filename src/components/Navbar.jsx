import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaPuzzlePiece, FaEnvelope, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }
    
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/about', label: 'About', icon: FaUser },
    { path: '/skills', label: 'Skills', icon: FaCode },
    { path: '/projects', label: 'Projects', icon: FaProjectDiagram },
    { path: '/services', label: 'Services', icon: FaBriefcase },
    { path: '/solutions', label: 'Solutions', icon: FaPuzzlePiece },
    { path: '/contact', label: 'Contact', icon: FaEnvelope },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-secondary/95 backdrop-blur-xl shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Home - Gaurav Ghadge"
          >
            <div className="relative">
              <span className="text-xl sm:text-2xl font-bold neon-text">GG</span>
              <span className="absolute inset-0 text-xl sm:text-2xl font-bold neon-text opacity-50 blur-sm group-hover:opacity-100 transition-opacity">GG</span>
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-400 group-hover:text-neon-cyan transition-colors">
              Gaurav Ghadge
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 min-h-[44px] ${
                    isActive(link.path)
                      ? 'bg-neon-cyan/20 text-neon-cyan neon-glow'
                      : 'text-gray-400 hover:text-neon-cyan hover:bg-white/5'
                  }`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  <Icon className="text-sm" aria-hidden="true" />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-gray-400 hover:text-neon-cyan transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-6 h-6 flex flex-col justify-center space-y-1.5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 }
                }}
                className="block h-0.5 bg-current w-full"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="block h-0.5 bg-current w-full"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7 }
                }}
                className="block h-0.5 bg-current w-full"
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-dark-bg/98 backdrop-blur-2xl z-40"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="container-custom pt-8 pb-6"
              >
                <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center space-x-4 px-5 py-4 rounded-xl transition-all duration-300 min-h-[56px] ${
                            isActive(link.path)
                              ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                              : 'text-gray-300 hover:text-neon-cyan hover:bg-white/5 active:bg-white/10'
                          }`}
                          aria-current={isActive(link.path) ? 'page' : undefined}
                        >
                          <Icon className="text-xl flex-shrink-0" aria-hidden="true" />
                          <span className="font-semibold text-lg">{link.label}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar


