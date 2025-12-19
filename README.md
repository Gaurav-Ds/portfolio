# Gaurav Ghadge - Premium AI Engineer Portfolio

A world-class, ultra-premium portfolio website built with React, showcasing expertise in Generative & Agentic AI, RAG systems, and LLM applications.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library
- **React Helmet Async** - SEO management

## 📁 Project Structure

```
Portfolio-main/
├── public/
│   ├── assets/
│   │   ├── resume.pdf          # Your resume PDF (required)
│   │   └── resume.docx         # Your resume Word doc (optional)
│   ├── favicon.png
│   ├── preview.png
│   ├── site.webmanifest
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Solutions.jsx
│   │   └── Contact.jsx
│   ├── config/
│   │   └── personalConfig.js   # WhatsApp number & personal config
│   ├── assets/
│   │   └── profile.jpg         # Your profile image
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                  # Vite HTML template (React entry point)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Quick Setup

### 1. Install Dependencies

   ```bash
npm install
```

### 2. Add Your Assets

**Profile Image:**
- Place your profile photo at: `src/assets/profile.jpg`
- Supported formats: JPG, PNG, WebP

**Resume Files:**
- PDF: Place at `public/assets/resume.pdf` (required)
- Word: Place at `public/assets/resume.docx` (optional)

### 3. Configure WhatsApp

Edit `src/config/personalConfig.js`:
```javascript
export const MY_WHATSAPP_NUMBER = '91XXXXXXXXXX' // Replace with your real number
export const WHATSAPP_DEFAULT_MESSAGE = 'Hi Gaurav, I saw your AI portfolio and want to discuss a project.'
```

**Important:** 
- Use format: country code + number (no + sign, no spaces)
- Example: `919876543210` for India

### 4. Run Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

See `DEPLOYMENT.md` for detailed deployment instructions.

## ⚙️ Configuration

### Contact Form

The contact form currently simulates submission. To connect to a real backend:

1. **Option 1: Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Get your form ID
   - Update `src/pages/Contact.jsx` → `handleSubmit` function

2. **Option 2: Custom Backend**
   - Update the `handleSubmit` function in `src/pages/Contact.jsx`
   - Point to your API endpoint

See the TODO comment in `Contact.jsx` for integration details.

### Routes

All routes are configured in `src/App.jsx`:
- `/` → Home
- `/about` → About
- `/skills` → Skills
- `/projects` → Projects
- `/services` → Services
- `/solutions` → Solutions
- `/contact` → Contact

## 📱 Features

- ✅ Fully responsive design
- ✅ Dark theme with neon accents
- ✅ Smooth animations (Framer Motion)
- ✅ SEO optimized
- ✅ Fast loading (Vite)
- ✅ Modern React patterns
- ✅ Accessible components
- ✅ WhatsApp integration
- ✅ Contact form with validation
- ✅ Project showcase
- ✅ Skills display
- ✅ Services & Solutions pages

## 🎨 Design Philosophy

- **Premium AI Agency Feel:** Dark backgrounds, neon glows, futuristic aesthetics
- **Clean & Modern:** Minimal clutter, focus on content
- **Professional:** Showcases expertise without being flashy
- **User-Friendly:** Intuitive navigation, clear CTAs

## 📝 Customization

### Update Personal Information

- **Name & Title:** Edit `src/pages/Home.jsx`
- **About Section:** Edit `src/pages/About.jsx`
- **Skills:** Edit `src/pages/Skills.jsx`
- **Projects:** Edit `src/pages/Projects.jsx`
- **Contact Info:** Edit `src/pages/Contact.jsx` and `src/components/Footer.jsx`

### Update Colors & Theme

Edit `tailwind.config.js` and `src/index.css` to customize colors, fonts, and styling.

### Add/Remove Pages

1. Create new page in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 🔧 Important Notes

### Asset Paths

- **Profile Image:** Import from `src/assets/profile.jpg` (handled by Vite)
- **Resume PDF:** Use `/assets/resume.pdf` (public folder, works in production)
- **Resume Word:** Use `/assets/resume.docx` (public folder)

## 🚀 Production Build

This is a production-ready React portfolio. The old static files have been removed and replaced with this modern React application.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Gaurav Ghadge**
- Generative & Agentic AI Engineer
- AI Consultant
- Python Mentor
- Email: gghadge225@gmail.com
- Website: https://gauravghadge.com

---

Built with ❤️ using React + Vite
