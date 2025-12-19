import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaPython, FaJs, FaDatabase, FaCloud, FaRobot, FaBrain } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Core',
      icon: FaPython,
      skills: [
        'Python', 'JavaScript', 'SQL', 'TypeScript', 'Bash', 'HTML/CSS'
      ],
      color: 'from-neon-cyan to-blue-500'
    },
    {
      title: 'AI & LLM Frameworks',
      icon: FaBrain,
      skills: [
        'LangChain', 'LangGraph', 'AutoGen', 'Haystack', 'LlamaIndex', 
        'CrewAI', 'CamelAI', 'DSPy', 'Instructor', 'Pydantic AI', 
        'FastEmbed', 'SentenceTransformers', 'HuggingFace Transformers'
      ],
      color: 'from-neon-pink to-purple-500'
    },
    {
      title: 'LLMs & Providers',
      icon: FaRobot,
      skills: [
        'OpenAI GPT-4o/GPT-5', 'DeepSeek', 'Google Gemini 2.0', 
        'Anthropic Claude 3.x', 'Llama 3.x', 'Mistral', 'Phi-3', 
        'Qwen', 'Mixtral', 'Zephyr', 'Grok'
      ],
      color: 'from-neon-green to-emerald-500'
    },
    {
      title: 'RAG & Vector DBs',
      icon: FaDatabase,
      skills: [
        'FAISS', 'ChromaDB', 'Qdrant', 'Pinecone', 'Weaviate', 
        'Milvus', 'Redis Vector', 'Elasticsearch', 'BM25', 
        'Hybrid RAG', 'Graph RAG', 'Agentic RAG'
      ],
      color: 'from-neon-cyan to-cyan-500'
    },
    {
      title: 'MLOps & Deployment',
      icon: FaCloud,
      skills: [
        'Docker', 'Kubernetes', 'FastAPI', 'Flask', 'LangServe',
        'AWS (Lambda, Bedrock)', 'Azure OpenAI', 'GCP Vertex AI',
        'Vercel AI SDK', 'Cloudflare Workers', 'HuggingFace Spaces',
        'Railway', 'Modal', 'Groq API'
      ],
      color: 'from-neon-pink to-rose-500'
    },
    {
      title: 'Data & Analytics',
      icon: FaDatabase,
      skills: [
        'NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'TensorFlow',
        'Plotly', 'Power BI', 'SQL', 'Excel', 'Matplotlib', 'Seaborn'
      ],
      color: 'from-neon-green to-teal-500'
    },
    {
      title: 'Automation',
      icon: FaRobot,
      skills: [
        'Selenium', 'Playwright', 'RPA Bots', 'Zapier', 'Make.com',
        'Browser Automation', 'Web Scraping', 'API Integration'
      ],
      color: 'from-neon-cyan to-sky-500'
    },
  ]

  return (
    <>
      <Helmet>
        <title>AI Skills & Tech Stack - Gaurav Ghadge</title>
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
              AI <span className="gradient-text">Skill Stack</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive expertise across the modern AI ecosystem — from LLM frameworks to vector databases, MLOps to automation.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 hover:border-neon-cyan/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 neon-text">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 glass-card p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning, Always Building</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The AI landscape evolves rapidly. I stay at the cutting edge by building real projects, 
              contributing to open source, and continuously experimenting with new frameworks and models.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Skills


