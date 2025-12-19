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

      <section className="section-padding pt-20 sm:pt-24 md:pt-32">
        <div className="container-custom">
          {/* Header - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="font-bold mb-4 sm:mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              AI Engineer passionate about building Agentic AI systems, teaching Python, and pushing the boundaries of what's possible with AI.
            </p>
          </motion.div>

          {/* Main Content - Mobile First Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-5 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold neon-text">Generative & Agentic AI Engineer</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg">
                <p>
                  I'm <strong className="neon-text">Gaurav Ghadge</strong>, an AI Engineer based in India with 
                  <strong className="neon-text"> 5+ years of experience</strong> in building intelligent systems. I specialize in 
                  <strong className="neon-text"> Generative AI</strong>, 
                  <strong className="neon-text"> Agentic AI</strong>, 
                  <strong className="neon-text"> Large Language Models</strong>, 
                  <strong className="neon-text"> RAG systems</strong>, and 
                  <strong className="neon-text"> Python development</strong>.
                </p>
                <p>
                  My journey started with traditional Machine Learning and Data Science, but I quickly pivoted to 
                  <strong className="neon-text"> Generative AI</strong> when GPT models emerged. I was among the early adopters 
                  of <strong className="neon-text">LangChain</strong>, <strong className="neon-text">RAG architectures</strong>, 
                  and <strong className="neon-text">multi-agent systems</strong>.
                </p>
                <p>
                  Today, I build <strong className="neon-text">autonomous AI agents</strong> that can reason, plan, and execute 
                  complex tasks. I've deployed <strong className="neon-text">RAG systems</strong> processing terabytes of data, 
                  <strong className="neon-text"> automation bots</strong> saving millions in operational costs, and 
                  <strong className="neon-text"> LLM-based applications</strong> transforming how businesses interact with data.
                </p>
                <p>
                  As a <strong className="neon-text">Python mentor</strong>, I've helped 200+ students and professionals master 
                  Python programming, AI/ML concepts, and build their own AI projects. I believe in hands-on learning and 
                  real-world applications.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 sm:space-y-5"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="glass-card p-5 sm:p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center flex-shrink-0">
                        <Icon className="text-lg sm:text-xl text-white" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{highlight.title}</h3>
                        <p className="text-sm sm:text-base text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Timeline - Mobile Optimized */}
          <div className="mt-12 sm:mt-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 neon-text"
            >
              My Journey
            </motion.h2>
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    className="glass-card p-5 sm:p-6 lg:p-8"
                  >
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex items-center justify-center flex-shrink-0">
                        <Icon className="text-xl sm:text-2xl text-white" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm sm:text-base text-neon-cyan font-bold">{item.year}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
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


