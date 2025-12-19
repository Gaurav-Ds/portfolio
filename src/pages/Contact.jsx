import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { FaEnvelope, FaMapMarkerAlt, FaCalendar, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const Contact = () => {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'success', 'error', or null

  useEffect(() => {
    const solution = searchParams.get('solution')
    if (solution) {
      setFormData(prev => ({
        ...prev,
        projectType: 'AI Solution',
        message: `I'm interested in: ${decodeURIComponent(solution)}\n\n`,
      }))
    }
  }, [searchParams])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Basic email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)

    // Client-side validation
    if (!formData.name.trim()) {
      setStatus('error')
      return
    }

    if (!validateEmail(formData.email)) {
      setStatus('error')
      return
    }

    if (!formData.projectType) {
      setStatus('error')
      return
    }

    if (!formData.message.trim()) {
      setStatus('error')
      return
    }

    // TODO: Connect this form to a real backend or service (Formspree, custom API, etc.)
    // For now, simulate form submission
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Example: Use Formspree or your own backend
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      // if (!response.ok) throw new Error('Failed to submit')
      
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
    }
  }

  const projectTypes = [
    'AI Agent Development',
    'RAG Chatbot',
    'Automation Bot',
    'Analytics Dashboard',
    'Custom AI Application',
    'AI Solution Template',
    'Consulting',
    'Other',
  ]

  return (
    <>
      <Helmet>
        <title>Contact - Gaurav Ghadge | Get In Touch</title>
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's work together on your next AI project or Python learning journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center">
                    <FaEnvelope className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <a href="mailto:gghadge225@gmail.com" className="text-gray-400 hover:text-neon-cyan transition-colors">
                      gghadge225@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Location</h3>
                    <p className="text-gray-400">Nagpur, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center">
                    <FaCalendar className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Availability</h3>
                    <p className="text-gray-400">Open for projects and mentoring</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-white"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Budget (Optional)
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-white"
                    placeholder="$5,000 - $10,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center space-x-2 text-neon-green bg-neon-green/10 p-4 rounded-lg">
                    <FaCheckCircle />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
                    <FaExclamationCircle />
                    <span>Something went wrong. Please try again or email me directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-neon flex items-center justify-center space-x-2"
                >
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact


