# 🚀 Paramjit Singh - Modern Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://param20h.github.io/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **Modern Portfolio** built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion - showcasing my journey as a Python Developer specializing in AI, Machine Learning, and Web3 technologies.

---

## 👨‍💻 About Me

**Paramjit Singh** | Computer Science Student at LPU (Lovely Professional University)

- 🐍 **Python Specialist** - AI/ML & Backend Development
- ⚛️ **Full-Stack Developer** - React, Next.js, Node.js
- 🤖 **AI Enthusiast** - Machine Learning & TensorFlow
- 🎮 **Game Developer** - Unity & Pygame
- 🔗 **Web3 Explorer** - Blockchain & Smart Contracts

---

## 🛠️ Tech Stack

### **Frontend**
React • Next.js • TypeScript • Tailwind CSS • Framer Motion • HTML5 • CSS3

### **Backend & Languages**
Python • JavaScript • Node.js • C++ • Java

### **AI/ML**
TensorFlow • Machine Learning • Data Analysis • Neural Networks

### **Game Development**
Unity • Pygame • Game Design

### **Tools & Platforms**
Git • GitHub • VS Code • Vercel • Docker

---

## ⚡ Quick Start

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager

### **Installation**

```powershell
# Clone repository
git clone https://github.com/param20h/param20h.github.io.git
cd param20h.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser 🎉

### **Build for Production**

```powershell
# Create optimized production build
npm run build

# Preview production build
npm run start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles with Tailwind
│
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section with animated intro
│   │   ├── About.tsx       # About section with stats
│   │   ├── Skills.tsx      # Skills grid with icons
│   │   ├── Projects.tsx    # Featured projects
│   │   ├── GitHubStats.tsx # Live GitHub statistics
│   │   └── Contact.tsx     # Contact form with EmailJS
│   │
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   │
│   ├── Navigation.tsx      # Navigation bar
│   ├── Footer.tsx          # Footer with social links
│   └── BackgroundEffects.tsx # Animated background
│
├── lib/
│   └── utils.ts            # Utility functions
│
├── types/
│   └── index.ts            # TypeScript type definitions
│
├── public/
│   └── media/              # Images, resume, assets
│
├── next.config.cjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind theme customization
└── tsconfig.json           # TypeScript configuration
```

---

## 🌟 Features

### **✨ Modern Stack**
- ⚡ **Next.js 14** - App Router with Server Components
- 📘 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling
- ✨ **Framer Motion** - Smooth animations
- 🎯 **Font Awesome** - Professional icons
- 📱 **Fully Responsive** - Mobile-first design

### **🚀 Performance**
- ⚡ Static site generation
- 🖼️ Image optimization
- 🎯 Code splitting
- 📦 Bundle optimization
- 🔍 SEO optimized

### **🎨 UI/UX**
- 🌈 Gradient effects
- ✨ Scroll animations
- 🎭 Hover interactions
- 💫 Background particles
- 📱 Mobile navigation

### **📊 Integrations**
- 📧 EmailJS contact form
- 📊 Live GitHub stats
- 🌐 GitHub contribution graphs
- 🔗 Social media links

---

## 🎯 Customization Guide

### **1. Update Personal Information**

**Edit Hero Section (`components/sections/Hero.tsx`):**
```typescript
const roles = [
  "Python Developer",
  "AI Enthusiast",
  // Add your roles...
];
```

**Edit About Section (`components/sections/About.tsx`):**
```typescript
const stats = [
  { label: "Years Experience", value: "2+" },
  // Update your stats...
];
```

### **2. Add Your Projects**

**Edit `components/sections/Projects.tsx`:**
```typescript
const projects: Project[] = [
  {
    title: "Your Project Name",
    description: "Project description...",
    image: "/media/project-image.png",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/username/repo",
    status: "live", // or "coming-soon"
  },
  // Add more projects...
];
```

### **3. Update Skills**

**Edit `components/sections/Skills.tsx`:**
```typescript
const skills = [
  { name: "Python", icon: faPython, color: "#3776AB" },
  { name: "React", icon: faReact, color: "#61DAFB" },
  // Add your skills...
];
```

### **4. Customize Theme Colors**

**Edit `tailwind.config.ts`:**
```typescript
colors: {
  primary: {
    500: '#00d4ff',  // Your primary brand color
  },
  accent: {
    500: '#ff6b6b',  // Your accent color
  },
}
```

### **5. Setup Contact Form (EmailJS)**

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Get your credentials (Service ID, Template ID, Public Key)
3. Create `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

4. Restart dev server: `npm run dev`

**EmailJS Template Example:**
```
Subject: New Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

---

## 🌐 Deployment

### **Deploy to Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Deploy to GitHub Pages**

1. Update `next.config.cjs` if needed
2. Build: `npm run build`
3. Deploy the `out/` folder

**Automated with GitHub Actions:**
- Push to `main` branch
- GitHub Actions automatically builds and deploys
- Check `.github/workflows/deploy.yml`

### **Deploy to Netlify**

```powershell
npm run build
# Drag 'out' folder to Netlify
```

---

## 🧪 Development

### **Available Scripts**

```powershell
npm run dev        # Start development server (localhost:3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### **Testing**

**Test locally:**
```powershell
npm run dev
# Open http://localhost:3000
```

**Test production build:**
```powershell
npm run build
npm run start
```

**Test on mobile:**
1. Get your local IP: `ipconfig`
2. On phone: `http://YOUR_IP:3000`

---

## 🐛 Troubleshooting

### **Images not loading?**
- Ensure images are in `public/media/`
- Use paths like `/media/image.png` (with leading `/`)

### **Build failing?**
```powershell
Remove-Item -Recurse -Force node_modules, .next
npm install
npm run build
```

### **Port 3000 already in use?**
```powershell
# Use different port
npm run dev -- -p 3001
```

### **EmailJS not working?**
- Check `.env.local` has correct credentials
- Restart dev server after changing `.env.local`
- Check browser console for errors
- Verify EmailJS template variables

### **GitHub stats showing 0?**
- Check browser console for API errors
- GitHub API rate limit (60 requests/hour without auth)
- Test page available at `/test-github-api.html`

---

## 📚 Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.0 | React framework |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| Font Awesome | 6 | Icons |
| EmailJS | 4.4.1 | Contact form |
| Lucide React | 0.344.0 | Additional icons |

---

## 🌟 Featured Projects

### **🧠 AI Financial Identification System**
Machine Learning system for the Indian Department of Posts using Python, TensorFlow, and Data Analysis.

**Tech:** Python • Machine Learning • TensorFlow • Data Science  
**Status:** In Development

### **🚀 Python Space Invaders Game**
Classic arcade game built with Pygame featuring OOP, collision detection, and progressive difficulty.

**Tech:** Python • Pygame • OOP • Game Development  
**Status:** Completed  
**Live:** [Play Now](https://param20h.me/space-invade)

---

## 📊 GitHub Stats

<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=param20h&show_icons=true&theme=dracula&include_all_commits=true&count_private=true&hide_border=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=param20h&layout=compact&langs_count=8&theme=dracula&hide_border=true"/>
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=param20h&theme=dracula&hide_border=true" alt="GitHub Streak" />
</div>

---

## 📞 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/param20h)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/param20h)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/param.060/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:paramjit.offical34@gmail.com)

**Portfolio:** [param20h.github.io](https://param20h.github.io/)

---

## ☕ Support My Work

If you find this project helpful or inspiring, consider supporting me!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/param20h)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Font Awesome](https://fontawesome.com/) and [Lucide](https://lucide.dev/)
- GitHub stats from [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)

---

⭐ **Star this repository** if you found it helpful!

**© 2025 Paramjit Singh | Computer Science Student at LPU | Python Developer**