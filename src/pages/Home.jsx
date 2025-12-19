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
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 glass-card text-sm font-semibold neon-text">🚀 AI Engineer</span>
                <span className="px-4 py-2 glass-card text-sm font-semibold text-neon-pink">🤖 Agentic AI</span>
                <span className="px-4 py-2 glass-card text-sm font-semibold text-neon-green">📊 Data Scientist</span>
                <span className="px-4 py-2 glass-card text-sm font-semibold text-neon-cyan">🐍 Python Mentor</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Gaurav Ghadge</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                Generative & Agentic AI Engineer · AI Consultant · Python Mentor
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed">
                Building <span className="neon-text font-semibold">Agentic AI systems</span>, 
                <span className="neon-text font-semibold"> RAG solutions</span>, 
                <span className="neon-text font-semibold"> automation tools</span>, 
                <span className="neon-text font-semibold"> LLM-based apps</span>, and 
                <span className="neon-text font-semibold"> analytics dashboards</span>.
                <br />
                <span className="text-gray-500">AI Master · Baap of AI · Top 1% Generative & Agentic AI Engineer</span>
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="glass-card p-4 text-center"
                  >
                    <div className="text-3xl font-bold neon-text">{stat.number}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/assets/resume.pdf"
                  download="Gaurav_Ghadge_Resume.pdf"
                  className="btn-neon flex items-center space-x-2"
                >
                  <FaFilePdf />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href="/assets/resume.docx"
                  download="Gaurav_Ghadge_Resume.docx"
                  className="btn-glass flex items-center space-x-2"
                >
                  <FaFileWord />
                  <span>Download Resume (Word)</span>
                </a>
                <Link
                  to="/projects"
                  className="btn-glass flex items-center space-x-2"
                >
                  <FaRocket />
                  <span>View AI Projects</span>
                </Link>
                <Link
                  to="/services"
                  className="btn-neon flex items-center space-x-2"
                >
                  <FaCode />
                  <span>Hire Me For AI Projects</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-3xl blur-2xl opacity-30 animate-glow"></div>
                <div className="relative glass-card p-4 rounded-3xl">
                  <img
                    src={profileImage}
                    alt="Gaurav Ghadge - AI Engineer"
                    className="w-full h-auto rounded-2xl"
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

