import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaBrain, FaCode, FaGraduationCap, FaRocket, FaAward } from 'react-icons/fa'

const About = () => {
  const timeline = [
    {
      year: '2017-2020',
      title: 'Early Career & Learning',
      description: 'Started journey in Data Science and Machine Learning. Built foundational skills in Python, SQL, and ML algorithms.',
      icon: FaGraduationCap,
    },
    {
      year: '2020-2022',
      title: 'AI & ML Specialist',
      description: 'Specialized in building ML models and data pipelines. Worked on NLP projects and computer vision applications.',
      icon: FaBrain,
    },
    {
      year: '2022-2023',
      title: 'Generative AI Pioneer',
      description: 'Early adopter of GPT models, LangChain, and RAG systems. Built first production RAG chatbot for enterprise.',
      icon: FaRocket,
    },
    {
      year: '2023-Present',
      title: 'Agentic AI Master',
      description: 'Leading development of multi-agent systems, autonomous AI agents, and complex LLM applications. Top 1% AI Engineer.',
      icon: FaAward,
    },
  ]

  const highlights = [
    {
      icon: FaBrain,
      title: 'AI/ML Expertise',
      description: '5+ years building intelligent systems',
    },
    {
      icon: FaCode,
      title: 'Python Development',
      description: 'Expert in Python ecosystem',
    },
    {
      icon: FaGraduationCap,
      title: 'Teaching & Mentoring',
      description: '200+ students mentored',
    },
  ]

  return (
    <>
      <Helmet>
        <title>About - Gaurav Ghadge | AI Engineer Journey</title>
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI Engineer passionate about building Agentic AI systems, teaching Python, and pushing the boundaries of what's possible with AI.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold neon-text">Generative & Agentic AI Engineer</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm <strong className="neon-text">Gaurav Ghadge</strong>, an AI Engineer based in India with 
                <strong className="neon-text"> 5+ years of experience</strong> in building intelligent systems. I specialize in 
                <strong className="neon-text"> Generative AI</strong>, 
                <strong className="neon-text"> Agentic AI</strong>, 
                <strong className="neon-text"> Large Language Models</strong>, 
                <strong className="neon-text"> RAG systems</strong>, and 
                <strong className="neon-text"> Python development</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey started with traditional Machine Learning and Data Science, but I quickly pivoted to 
                <strong className="neon-text"> Generative AI</strong> when GPT models emerged. I was among the early adopters 
                of <strong className="neon-text">LangChain</strong>, <strong className="neon-text">RAG architectures</strong>, 
                and <strong className="neon-text">multi-agent systems</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, I build <strong className="neon-text">autonomous AI agents</strong> that can reason, plan, and execute 
                complex tasks. I've deployed <strong className="neon-text">RAG systems</strong> processing terabytes of data, 
                <strong className="neon-text"> automation bots</strong> saving millions in operational costs, and 
                <strong className="neon-text"> LLM-based applications</strong> transforming how businesses interact with data.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a <strong className="neon-text">Python mentor</strong>, I've helped 200+ students and professionals master 
                Python programming, AI/ML concepts, and build their own AI projects. I believe in hands-on learning and 
                real-world applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass-card p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center flex-shrink-0">
                        <Icon className="text-xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                        <p className="text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12 neon-text">My Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="glass-card p-6 lg:p-8"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center flex-shrink-0">
                        <Icon className="text-2xl text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-neon-cyan font-bold">{item.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About


