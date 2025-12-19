import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Helmet>
        <html lang="en" />
        <title>Gaurav Ghadge - Generative & Agentic AI Engineer | AI Consultant | Top 1% AI Master</title>
        <meta name="description" content="Gaurav Ghadge - 5+ years building Agentic AI systems, RAG solutions, and LLM-based applications. AI Master · Baap of AI · Top 1% Generative & Agentic AI Engineer. Expert in Python, LangChain, OpenAI, and multi-agent systems." />
        <meta name="keywords" content="Gaurav Ghadge, AI Engineer, Generative AI, Agentic AI, RAG, LangChain, AI Consultant, Python Mentor, Data Scientist, LLM, OpenAI, GPT-4, Multi-Agent Systems, AI Development" />
        <meta name="author" content="Gaurav Ghadge" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://gauravghadge.com" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App


