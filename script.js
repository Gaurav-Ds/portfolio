// ===== GLOBAL VARIABLES =====
let currentSection = 'home';
let isScrolling = false;
let scrollTimeout;

// ===== PROJECT DATA =====
const projectData = {
    'multi-agent': {
        title: 'Multi-Agent Document Intelligence System',
        problem: 'Manual document processing was time-consuming, error-prone, and costly. The company needed to extract structured data from 15+ different document types including invoices, contracts, forms, and reports.',
        solution: `
            <p>Developed an intelligent multi-agent system using GPT-4 and Computer Vision to automate document processing:</p>
            <ul>
                <li><strong>Document Classification Agent:</strong> Automatically categorizes documents using computer vision and OCR</li>
                <li><strong>Data Extraction Agent:</strong> Uses GPT-4 with custom prompts to extract structured data</li>
                <li><strong>Validation Agent:</strong> Cross-references extracted data for accuracy and completeness</li>
                <li><strong>Integration Agent:</strong> Seamlessly integrates with existing ERP systems</li>
            </ul>
        `,
        features: [
            'Automated processing of 15+ document types',
            'Real-time data extraction with 98% accuracy',
            'Intelligent error detection and correction',
            'Seamless integration with existing systems',
            'Scalable architecture handling 10,000+ documents/day',
            'Comprehensive audit trail and compliance features'
        ],
        technologies: [
            { name: 'GPT-4', icon: '🤖' },
            { name: 'Computer Vision', icon: '👁️' },
            { name: 'Python', icon: '🐍' },
            { name: 'FastAPI', icon: '⚡' },
            { name: 'PostgreSQL', icon: '🗄️' },
            { name: 'Docker', icon: '🐳' }
        ],
        results: [
            { metric: '98%', label: 'Data Extraction Accuracy' },
            { metric: '$2M', label: 'Annual Cost Reduction' },
            { metric: '90%', label: 'Processing Time Reduction' },
            { metric: '10K+', label: 'Documents Processed Daily' }
        ],
        links: [
            { name: 'GitHub', url: 'https://github.com/gauravghadge/document-intelligence', icon: 'fab fa-github' },
            { name: 'Live Demo', url: 'https://demo.gauravghadge.com/document-ai', icon: 'fas fa-external-link-alt' }
        ]
    },
    'rag-system': {
        title: 'RAG-based Knowledge Management System',
        problem: 'The organization had 10TB+ of unstructured data scattered across multiple systems. Employees struggled to find relevant information quickly, leading to duplicated work and missed opportunities.',
        solution: `
            <p>Built a comprehensive RAG (Retrieval-Augmented Generation) system for intelligent knowledge management:</p>
            <ul>
                <li><strong>Vector Database:</strong> Implemented ChromaDB for efficient semantic search</li>
                <li><strong>Document Processing:</strong> Automated ingestion and chunking of documents</li>
                <li><strong>Semantic Search:</strong> Advanced embeddings for context-aware retrieval</li>
                <li><strong>Q&A Interface:</strong> Natural language querying with accurate responses</li>
                <li><strong>Knowledge Graph:</strong> Connected insights across different data sources</li>
            </ul>
        `,
        features: [
            'Processed 10TB+ of unstructured data',
            'Semantic search with sub-second response times',
            'Natural language Q&A interface',
            'Multi-modal document support (PDF, DOC, images)',
            'Real-time knowledge graph updates',
            'Advanced access control and security'
        ],
        technologies: [
            { name: 'LangChain', icon: '🔗' },
            { name: 'ChromaDB', icon: '💾' },
            { name: 'OpenAI Embeddings', icon: '🧠' },
            { name: 'React', icon: '⚛️' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'Redis', icon: '🔴' }
        ],
        results: [
            { metric: '92%', label: 'Search Accuracy' },
            { metric: '<1s', label: 'Average Search Time' },
            { metric: '10TB+', label: 'Data Processed' },
            { metric: '500+', label: 'Daily Active Users' }
        ],
        links: [
            { name: 'GitHub', url: 'https://github.com/gauravghadge/rag-system', icon: 'fab fa-github' },
            { name: 'Live Demo', url: 'https://demo.gauravghadge.com/rag-system', icon: 'fas fa-external-link-alt' }
        ]
    },
    'codegen': {
        title: 'CodeGen AI Agent',
        problem: 'Development teams were spending excessive time on repetitive coding tasks, boilerplate generation, and code refactoring. This slowed down project delivery and reduced developer productivity.',
        solution: `
            <p>Created an intelligent code generation and refactoring agent using advanced LLM techniques:</p>
            <ul>
                <li><strong>Code Analysis:</strong> Deep understanding of existing codebase and patterns</li>
                <li><strong>Smart Generation:</strong> Context-aware code generation with best practices</li>
                <li><strong>Refactoring Engine:</strong> Automated code optimization and modernization</li>
                <li><strong>Testing Integration:</strong> Automatic test case generation and validation</li>
                <li><strong>Documentation:</strong> Auto-generates comprehensive documentation</li>
            </ul>
        `,
        features: [
            'Intelligent code generation from natural language',
            'Automated refactoring and optimization',
            'Multi-language support (Python, JavaScript, Java)',
            'Integration with popular IDEs and Git',
            'Automatic test case generation',
            'Real-time code quality analysis'
        ],
        technologies: [
            { name: 'GPT-4', icon: '🤖' },
            { name: 'Code Analysis', icon: '🔍' },
            { name: 'Python', icon: '🐍' },
            { name: 'AST Parser', icon: '🌳' },
            { name: 'VS Code Extension', icon: '💻' },
            { name: 'GitHub Actions', icon: '⚙️' }
        ],
        results: [
            { metric: '85%', label: 'Development Efficiency' },
            { metric: '50%', label: 'Time Saved' },
            { metric: '95%', label: 'Code Quality Score' },
            { metric: '200+', label: 'Developers Using' }
        ],
        links: [
            { name: 'GitHub', url: 'https://github.com/gauravghadge/codegen-agent', icon: 'fab fa-github' },
            { name: 'VS Code Extension', url: 'https://marketplace.visualstudio.com/items?itemName=gauravghadge.codegen', icon: 'fas fa-puzzle-piece' }
        ]
    },
    'sentiment': {
        title: 'Real-time Sentiment Analysis Engine',
        problem: 'The company needed to monitor brand sentiment across social media platforms in real-time. Manual monitoring was impossible given the volume of 100K+ posts per day.',
        solution: `
            <p>Built a high-performance real-time sentiment analysis engine using advanced NLP techniques:</p>
            <ul>
                <li><strong>Data Ingestion:</strong> Real-time streaming from multiple social platforms</li>
                <li><strong>NLP Pipeline:</strong> Fine-tuned RoBERTa model for sentiment classification</li>
                <li><strong>Real-time Processing:</strong> Apache Kafka for high-throughput data processing</li>
                <li><strong>Live Dashboard:</strong> Interactive visualization of sentiment trends</li>
                <li><strong>Alert System:</strong> Automated notifications for sentiment shifts</li>
            </ul>
        `,
        features: [
            'Processes 100K+ social media posts daily',
            'Real-time sentiment classification',
            'Multi-language support (English, Spanish, French)',
            'Interactive live dashboard',
            'Automated alert system',
            'Historical trend analysis'
        ],
        technologies: [
            { name: 'RoBERTa', icon: '🧠' },
            { name: 'Apache Kafka', icon: '📡' },
            { name: 'Real-time', icon: '⚡' },
            { name: 'React', icon: '⚛️' },
            { name: 'D3.js', icon: '📊' },
            { name: 'Docker', icon: '🐳' }
        ],
        results: [
            { metric: '100K+', label: 'Posts Processed Daily' },
            { metric: '<100ms', label: 'Processing Latency' },
            { metric: '94%', label: 'Sentiment Accuracy' },
            { metric: '24/7', label: 'Real-time Monitoring' }
        ],
        links: [
            { name: 'GitHub', url: 'https://github.com/gauravghadge/sentiment-engine', icon: 'fab fa-github' },
            { name: 'Live Dashboard', url: 'https://demo.gauravghadge.com/sentiment', icon: 'fas fa-chart-line' }
        ]
    }
};

// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const projectModal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const projectModalBtns = document.querySelectorAll('.project-modal-btn');
const contactForm = document.getElementById('contactForm');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });

    // Hide loading screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize scroll spy
    initializeScrollSpy();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize project modals
    initializeProjectModals();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize navbar effects
    initializeNavbarEffects();
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Mobile navigation toggle
    navToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

// ===== LOADING SCREEN =====
function showLoadingScreen() {
    loadingScreen.style.display = 'flex';
    loadingScreen.classList.remove('hidden');
}

function hideLoadingScreen() {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// ===== NAVIGATION =====
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

function initializeNavbarEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL SPY =====
function initializeScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        if (isScrolling) return;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 100);
        
        isScrolling = true;
        
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        if (current !== currentSection) {
            currentSection = current;
            updateActiveNavLink(current);
        }
    });
}

function updateActiveNavLink(sectionId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// ===== PROJECT MODALS =====
function initializeProjectModals() {
    projectModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    modalClose.addEventListener('click', closeProjectModal);
}

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalProblem').textContent = project.problem;
    document.getElementById('modalSolution').innerHTML = project.solution;
    
    // Populate features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Populate technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.className = 'tech-item';
        techSpan.innerHTML = `${tech.icon} ${tech.name}`;
        techContainer.appendChild(techSpan);
    });
    
    // Populate results
    const resultsContainer = document.getElementById('modalResults');
    resultsContainer.innerHTML = '';
    project.results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-item';
        resultDiv.innerHTML = `
            <span class="result-metric">${result.metric}</span>
            <span class="result-label">${result.label}</span>
        `;
        resultsContainer.appendChild(resultDiv);
    });
    
    // Populate links
    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = '';
    project.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.innerHTML = `
            <i class="${link.icon}"></i>
            <span>${link.name}</span>
        `;
        linksContainer.appendChild(linkElement);
    });
    
    // Show modal
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
        projectModal.classList.add('modal-open');
    }, 10);
}

function closeProjectModal() {
    projectModal.classList.remove('modal-open');
    setTimeout(() => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    contactForm.addEventListener('submit', handleContactSubmit);
}

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
    submitBtn.disabled = true;
    
    try {
        // Simulate API call (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        console.error('Error sending message:', error);
        showToast('Failed to send message. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
    const backgroundColor = type === 'success' ? '#00ff88' : 
                           type === 'error' ? '#ff0080' : 
                           type === 'warning' ? '#ffaa00' : '#00d4ff';
    
    Toastify({
        text: message,
        duration: 5000,
        gravity: 'top',
        position: 'right',
        backgroundColor: backgroundColor,
        color: '#000',
        fontSize: '14px',
        fontWeight: '600',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        stopOnFocus: true,
        close: true,
        style: {
            background: `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}dd)`,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        }
    }).showToast();
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE OPTIMIZATIONS =====
const optimizedScrollHandler = throttle(() => {
    // Scroll-based animations and effects
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys
    if (e.altKey) {
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                navigateToSection('prev');
                break;
            case 'ArrowDown':
                e.preventDefault();
                navigateToSection('next');
                break;
        }
    }
});

function navigateToSection(direction) {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const currentIndex = sections.findIndex(section => 
        section.getAttribute('id') === currentSection
    );
    
    let nextIndex;
    if (direction === 'next') {
        nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
    } else {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
    }
    
    const targetSection = sections[nextIndex];
    const targetId = targetSection.getAttribute('id');
    
    // Update active nav link
    updateActiveNavLink(targetId);
    
    // Smooth scroll to section
    const offsetTop = targetSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// ===== THEME MANAGEMENT =====
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function getTheme() {
    return localStorage.getItem('theme') || 'dark';
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getTheme();
    setTheme(savedTheme);
});

// ===== ANALYTICS (OPTIONAL) =====
function trackEvent(eventName, properties = {}) {
    // Replace with your analytics service
    console.log('Event tracked:', eventName, properties);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', () => {
    // Track project modal opens
    projectModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            trackEvent('project_view', { project_id: projectId });
        });
    });
    
    // Track contact form submissions
    contactForm.addEventListener('submit', () => {
        trackEvent('contact_form_submit');
    });
    
    // Track resume downloads
    const resumeLinks = document.querySelectorAll('a[href*="Gaurav_Ghadge.pdf"]');
    resumeLinks.forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('resume_download');
        });
    });
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // Send to error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Send to error tracking service
});

// ===== SERVICE WORKER REGISTRATION (FOR PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== EXPORT FOR GLOBAL ACCESS =====
window.PortfolioApp = {
    showToast,
    openProjectModal,
    closeProjectModal,
    trackEvent,
    setTheme,
    getTheme
};
