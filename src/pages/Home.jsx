import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaDownload, FaFilePdf, FaFileWord, FaRocket, FaCode } from 'react-icons/fa'
import profileImage from '../assets/profile.jpg'

const Home = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '200+', label: 'Students Mentored' },
    { number: '15+', label: 'AI Domains' },
  ]

  return (
    <>
      <Helmet>
        <title>Home - Gaurav Ghadge | Generative & Agentic AI Engineer</title>
      </Helmet>
      
      {/* Hero Section - Mobile-First */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-20 sm:pt-24 md:pt-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              {/* Badges - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 glass-card text-xs sm:text-sm font-semibold neon-text">
                  🚀 AI Engineer
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 glass-card text-xs sm:text-sm font-semibold text-neon-pink">
                  🤖 Agentic AI
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 glass-card text-xs sm:text-sm font-semibold text-neon-green">
                  📊 Data Scientist
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 glass-card text-xs sm:text-sm font-semibold text-neon-cyan">
                  🐍 Python Mentor
                </span>
              </motion.div>

              {/* Title - Mobile Optimized Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-bold leading-[1.1] tracking-tight"
              >
                Hi, I'm <span className="gradient-text">Gaurav Ghadge</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 leading-tight"
              >
                Generative & Agentic AI Engineer
                <span className="hidden sm:inline"> · AI Consultant · Python Mentor</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-400 leading-relaxed"
              >
                Building <span className="neon-text font-semibold">Agentic AI systems</span>, 
                <span className="neon-text font-semibold"> RAG solutions</span>, 
                <span className="neon-text font-semibold"> automation tools</span>, 
                <span className="neon-text font-semibold"> LLM-based apps</span>, and 
                <span className="neon-text font-semibold"> analytics dashboards</span>.
                <br className="hidden sm:block" />
                <span className="text-sm sm:text-base text-gray-500 block mt-2">
                  AI Master · Baap of AI · Top 1% Generative & Agentic AI Engineer
                </span>
              </motion.p>

              {/* Stats - Mobile Optimized Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="glass-card p-3 sm:p-4 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold neon-text">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1 leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons - Mobile Optimized with Primary/Secondary Hierarchy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2"
              >
                <a
                  href="/assets/resume.pdf"
                  download="Gaurav_Ghadge_Resume.pdf"
                  className="btn-neon flex items-center justify-center space-x-2 w-full sm:w-auto"
                  aria-label="Download Resume PDF"
                >
                  <FaFilePdf aria-hidden="true" />
                  <span>Download Resume (PDF)</span>
                </a>
                <Link
                  to="/projects"
                  className="btn-neon flex items-center justify-center space-x-2 w-full sm:w-auto"
                  aria-label="View AI Projects"
                >
                  <FaRocket aria-hidden="true" />
                  <span>View AI Projects</span>
                </Link>
                <Link
                  to="/services"
                  className="btn-glass flex items-center justify-center space-x-2 w-full sm:w-auto"
                  aria-label="Hire for AI Projects"
                >
                  <FaCode aria-hidden="true" />
                  <span>Hire Me</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(0, 212, 255, 0.3)",
                      "0 0 60px rgba(0, 212, 255, 0.5)",
                      "0 0 40px rgba(0, 212, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-3xl blur-2xl opacity-30"
                />
                <div className="relative glass-card p-3 sm:p-4 rounded-3xl">
                  <img
                    src={profileImage}
                    alt="Gaurav Ghadge - Generative & Agentic AI Engineer"
                    className="w-full h-auto rounded-2xl"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

