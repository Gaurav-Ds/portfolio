import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaRobot, FaBrain, FaCog, FaChartLine, FaCode, FaHandshake, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { MY_WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '../config/personalConfig'

const Services = () => {
  const services = [
    {
      icon: FaRobot,
      title: 'AI Agents',
      description: 'Build autonomous multi-agent systems that can reason, plan, and execute complex tasks autonomously.',
      features: ['Multi-agent orchestration', 'ReAct-style reasoning', 'Task automation', 'Decision-making systems'],
    },
    {
      icon: FaBrain,
      title: 'RAG Chatbots',
      description: 'Create intelligent chatbots that understand your documents and provide accurate, context-aware answers.',
      features: ['Document Q&A', 'Semantic search', 'Multi-modal support', 'Enterprise-ready'],
    },
    {
      icon: FaCog,
      title: 'Automation Bots',
      description: 'Develop browser automation and RPA solutions that handle repetitive tasks with intelligence.',
      features: ['Web scraping', 'Data extraction', 'Form filling', 'Workflow automation'],
    },
    {
      icon: FaChartLine,
      title: 'Dashboards & Insights',
      description: 'Build powerful analytics dashboards with AI-powered insights and predictions.',
      features: ['Real-time analytics', 'Predictive models', 'Interactive visualizations', 'Custom reports'],
    },
    {
      icon: FaCode,
      title: 'Custom AI Applications',
      description: 'End-to-end development of custom LLM-based applications tailored to your business needs.',
      features: ['Full-stack development', 'API integration', 'Cloud deployment', 'Maintenance & support'],
    },
  ]

  const industries = [
    'Education & E-Learning',
    'Freelancers & Consultants',
    'Startups & SMEs',
    'Enterprise Businesses',
    'Healthcare & Pharma',
    'Finance & Banking',
    'E-commerce & Retail',
  ]

  const process = [
    {
      step: 1,
      title: 'Discovery Call',
      description: 'We discuss your requirements, goals, and challenges to understand what you need.',
    },
    {
      step: 2,
      title: 'Proposal & Plan',
      description: 'I provide a detailed proposal with architecture, timeline, and pricing.',
    },
    {
      step: 3,
      title: 'Build & Iterate',
      description: 'Development with regular updates, demos, and feedback loops.',
    },
    {
      step: 4,
      title: 'Deploy & Handover',
      description: 'Deployment, documentation, training, and ongoing support.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Services - Gaurav Ghadge | AI Consultant & Freelancer</title>
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
              AI <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Freelance AI consultant helping businesses build intelligent systems, automate workflows, and leverage LLMs for competitive advantage.
            </p>
          </motion.div>

          {/* What I Can Build */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center neon-text">What I Can Build For You</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
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
                    <h3 className="text-xl font-bold mb-3 neon-text">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
                          <span className="text-neon-green">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Industries */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center neon-text">Industries I Help</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 glass-card text-gray-300 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </div>

          {/* How We Work */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center neon-text">How We Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 neon-text">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Build Your AI Solution?</h2>
              <p className="text-gray-400 mb-6">
                Let's discuss your project and how AI can transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn-neon flex items-center space-x-2"
                >
                  <FaHandshake />
                  <span>Book an AI Project</span>
                </Link>
                <a
                  href={`https://wa.me/${MY_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass flex items-center space-x-2"
                >
                  <FaWhatsapp />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="mailto:gghadge225@gmail.com"
                  className="btn-glass flex items-center space-x-2"
                >
                  <FaPhone />
                  <span>Email Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services


