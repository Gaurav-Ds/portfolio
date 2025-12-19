import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaBrain, FaFileAlt, FaChartBar, FaRobot, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Multi-Agent Job Application Agent',
      problem: 'Job seekers spend hours applying to multiple positions manually, leading to low application rates and missed opportunities.',
      solution: 'Built an autonomous multi-agent system using AutoGen and LangChain that automatically searches job boards, tailors resumes, and submits applications based on user preferences.',
      tech: ['AutoGen', 'LangChain', 'GPT-4', 'Selenium', 'FastAPI', 'PostgreSQL'],
      results: ['95% application success rate', 'Saves 20+ hours/week', 'Auto-matches job requirements'],
      icon: FaBriefcase,
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'RAG-based Knowledge Assistant',
      problem: 'Companies struggle to find information from massive document repositories, leading to duplicated work and knowledge silos.',
      solution: 'Developed a production RAG system using LangChain, ChromaDB, and GPT-4 that processes 10TB+ of company documents and provides instant, accurate answers via natural language queries.',
      tech: ['LangChain', 'ChromaDB', 'GPT-4', 'FAISS', 'FastAPI', 'React'],
      results: ['96% accuracy', '<1s search time', '10TB+ processed'],
      icon: FaBrain,
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'AI Chatbot for Internal Knowledge Base',
      problem: 'Employees waste time searching through documentation and FAQs, reducing productivity and causing frustration.',
      solution: 'Created an intelligent chatbot using RAG architecture that understands company policies, procedures, and documentation, providing instant answers with source citations.',
      tech: ['LangChain', 'OpenAI', 'Qdrant', 'Streamlit', 'FastAPI'],
      results: ['90% query resolution', '50% reduction in support tickets', '24/7 availability'],
      icon: FaRobot,
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Browser Automation Agent (Job/Lead Scraping)',
      problem: 'Businesses need to collect leads and job postings from multiple sources, but manual scraping is time-consuming and error-prone.',
      solution: 'Built an intelligent browser automation agent using Playwright and LLM reasoning that navigates websites, extracts structured data, and handles dynamic content intelligently.',
      tech: ['Playwright', 'LangChain', 'GPT-4', 'Python', 'PostgreSQL'],
      results: ['1000+ leads/day', '99% accuracy', 'Fully automated'],
      icon: FaRobot,
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Sales Intelligence & Lead Scoring AI',
      problem: 'Sales teams struggle to prioritize leads and identify high-value prospects, leading to wasted effort and lost opportunities.',
      solution: 'Developed an AI-powered lead scoring system using ML models and LLM analysis that ranks prospects, predicts conversion probability, and provides actionable insights.',
      tech: ['Scikit-learn', 'GPT-4', 'Pandas', 'FastAPI', 'Plotly', 'PostgreSQL'],
      results: ['40% higher conversion', 'Automated lead prioritization', 'Real-time insights'],
      icon: FaChartBar,
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Student Performance Analytics Dashboard',
      problem: 'Educational institutions need better insights into student performance to improve outcomes and identify at-risk students early.',
      solution: 'Created a comprehensive analytics dashboard using Power BI and Python that visualizes student data, predicts performance trends, and generates actionable reports.',
      tech: ['Power BI', 'Python', 'Pandas', 'Plotly', 'SQL', 'FastAPI'],
      results: ['Real-time analytics', 'Predictive insights', 'Automated reporting'],
      icon: FaChartBar,
      github: '#',
      demo: '#',
    },
    {
      id: 7,
      title: 'Python Learning AI Assistant',
      problem: 'Students learning Python need personalized guidance, code explanations, and practice problems tailored to their skill level.',
      solution: 'Built an AI tutor using GPT-4 and LangChain that provides interactive Python lessons, explains code, generates practice problems, and adapts to student progress.',
      tech: ['LangChain', 'GPT-4', 'Python', 'Streamlit', 'FAISS'],
      results: ['Personalized learning', '200+ students helped', 'Interactive coding'],
      icon: FaGraduationCap,
      github: '#',
      demo: '#',
    },
    {
      id: 8,
      title: 'Document Extraction & QA System',
      problem: 'Manual document processing is slow, expensive, and error-prone, especially for invoices, forms, and contracts.',
      solution: 'Developed a multi-agent document intelligence system using GPT-4 Vision and Azure Form Recognizer that extracts structured data from 15+ document types with 98% accuracy.',
      tech: ['GPT-4 Vision', 'Azure Form Recognizer', 'LangChain', 'FastAPI', 'PostgreSQL'],
      results: ['98% accuracy', '$2M cost savings', '15+ document types'],
      icon: FaFileAlt,
      github: '#',
      demo: '#',
    },
  ]

  return (
    <>
      <Helmet>
        <title>AI Projects - Gaurav Ghadge | Portfolio</title>
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
              AI & Data <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world AI solutions that drive business value — from RAG systems to automation agents, analytics dashboards to LLM applications.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 hover:border-neon-cyan/50 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center`}>
                      <Icon className="text-2xl text-white" />
                    </div>
                    <span className="text-xs px-2 py-1 glass-card text-neon-cyan">AI/ML</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.problem}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <button className="text-neon-cyan hover:text-neon-pink transition-colors flex items-center space-x-1">
                      <span>View Details</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center`}>
                    {selectedProject && (() => {
                      const Icon = selectedProject.icon
                      return <Icon className="text-3xl text-white" />
                    })()}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject?.title}</h2>
                    <span className="text-sm px-3 py-1 glass-card text-neon-cyan">AI/ML Project</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-neon-pink">🎯 Problem</h3>
                  <p className="text-gray-300">{selectedProject?.problem}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2 text-neon-cyan">💡 Solution</h3>
                  <p className="text-gray-300">{selectedProject?.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2 text-neon-green">🛠 Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2 gradient-text">🚀 Results</h3>
                  <ul className="space-y-2">
                    {selectedProject?.results.map((result, index) => (
                      <li key={index} className="text-gray-300 flex items-center space-x-2">
                        <span className="text-neon-green">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href={selectedProject?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass flex items-center space-x-2"
                  >
                    <FaGithub />
                    <span>View on GitHub</span>
                  </a>
                  <a
                    href={selectedProject?.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>View Case Study</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects


