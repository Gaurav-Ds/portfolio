import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaBriefcase, FaHeadset, FaBrain, FaWhatsapp, FaFileInvoice, FaChartBar, FaGraduationCap, FaRobot } from 'react-icons/fa'

const Solutions = () => {
  const navigate = useNavigate()

  const solutions = [
    {
      icon: FaBriefcase,
      title: 'Job Application Agent',
      problem: 'Spending hours applying to jobs manually?',
      outcome: 'Automated job search, resume tailoring, and application submission.',
      tech: ['AutoGen', 'LangChain', 'GPT-4', 'Selenium'],
      query: 'Job Application Agent',
    },
    {
      icon: FaHeadset,
      title: 'Customer Support AI',
      problem: 'Overwhelmed with customer queries?',
      outcome: '24/7 AI chatbot that handles FAQs, tickets, and escalations.',
      tech: ['LangChain', 'GPT-4', 'RAG', 'Streamlit'],
      query: 'Customer Support AI',
    },
    {
      icon: FaBrain,
      title: 'Internal RAG Knowledge Bot',
      problem: 'Can\'t find information in company docs?',
      outcome: 'Instant answers from your entire knowledge base with citations.',
      tech: ['LangChain', 'ChromaDB', 'GPT-4', 'FAISS'],
      query: 'RAG Knowledge Bot',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp Q&A Bot',
      problem: 'Need AI assistant on WhatsApp?',
      outcome: 'AI chatbot integrated with WhatsApp for customer engagement.',
      tech: ['Twilio', 'LangChain', 'GPT-4', 'FastAPI'],
      query: 'WhatsApp Q&A Bot',
    },
    {
      icon: FaFileInvoice,
      title: 'Invoice / Document Extraction AI',
      problem: 'Manual data entry from invoices?',
      outcome: 'Automated extraction of structured data from invoices and forms.',
      tech: ['GPT-4 Vision', 'Azure Form Recognizer', 'LangChain'],
      query: 'Document Extraction AI',
    },
    {
      icon: FaChartBar,
      title: 'Analytics & Reporting Dashboard',
      problem: 'Need insights from your data?',
      outcome: 'Interactive dashboards with AI-powered predictions and insights.',
      tech: ['Power BI', 'Python', 'Plotly', 'FastAPI'],
      query: 'Analytics Dashboard',
    },
    {
      icon: FaGraduationCap,
      title: 'Python Practice & Learning Bot',
      problem: 'Students struggling with Python?',
      outcome: 'AI tutor that provides personalized lessons and code explanations.',
      tech: ['LangChain', 'GPT-4', 'Streamlit', 'FAISS'],
      query: 'Python Learning Bot',
    },
    {
      icon: FaRobot,
      title: 'Browser Automation Agent',
      problem: 'Need to scrape or automate web tasks?',
      outcome: 'Intelligent browser automation for data collection and task automation.',
      tech: ['Playwright', 'LangChain', 'GPT-4', 'Python'],
      query: 'Browser Automation Agent',
    },
  ]

  const handleSolutionClick = (query) => {
    navigate(`/contact?solution=${encodeURIComponent(query)}`)
  }

  return (
    <>
      <Helmet>
        <title>AI Solutions & Templates - Gaurav Ghadge</title>
      </Helmet>

      <section className="section-padding pt-32">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              AI <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready-to-deploy AI solution templates. Pick one, customize it, and deploy — or let me build it for you.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 hover:border-neon-cyan/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center mb-4">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 neon-text">{solution.title}</h3>
                  
                  <div className="mb-4">
                    <p className="text-sm text-neon-pink font-semibold mb-1">Problem:</p>
                    <p className="text-gray-400 text-sm">{solution.problem}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-neon-green font-semibold mb-1">Outcome:</p>
                    <p className="text-gray-300 text-sm">{solution.outcome}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-neon-cyan font-semibold mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleSolutionClick(solution.query)}
                    className="w-full btn-neon mt-4"
                  >
                    I Want This Solution
                  </button>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Need a Custom Solution?</h2>
              <p className="text-gray-400 mb-6">
                Don't see what you need? Let's discuss your unique requirements and build a custom AI solution.
              </p>
              <Link
                to="/contact"
                className="btn-neon inline-flex items-center space-x-2"
              >
                <span>Get Custom Solution</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Solutions


