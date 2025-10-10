# Ruben Luna - Portfolio Website

A modern, animated portfolio website showcasing my experience as a Full-Stack Software Engineer specializing in web development and artificial intelligence applications.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=flat&logo=vite&logoColor=white)

## ✨ Features

- **Modern UI/UX** - Clean, professional design with glass-morphism effects
- **Smooth Animations** - GSAP-powered scroll animations and transitions
- **Fully Responsive** - Optimized for all screen sizes
- **Performance Optimized** - Fast loading times with optimized assets
- **Type Safe** - Built with TypeScript for reliability
- **Component Architecture** - Reusable UI components following React best practices

## 🚀 Tech Stack

### Frontend

- **React 19** - Latest version with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **GSAP** - Professional-grade animations
- **Lucide React** - Beautiful icon set

### Build Tools

- **Vite 7** - Lightning-fast build tool
- **ESLint** - Code quality and consistency
- **SWC** - Fast TypeScript/JavaScript compiler

### Libraries

- **date-fns** - Modern date utility library
- **class-variance-authority** - Type-safe component variants
- **react-icons** - Icon library with SI icons

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Navigation, Background, etc.)
│   └── ui/              # Reusable UI components (Button, Card, etc.)
├── sections/            # Page sections (Hero, About, Experience, etc.)
├── pages/               # Full page components
├── lib/                 # Utility functions
└── index.css           # Global styles and custom CSS
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/rubenaluna/website.git
cd website
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 🎨 Key Components

### UI Components

- **Button** - Gradient button with variants
- **GlassCard** - Glass-morphism card component
- **DatePill** - Date badge component
- **TechTag** - Technology tag with color variants
- **SectionHeader** - Consistent section headers
- **GradientDivider** - Decorative gradient divider

### Layout Components

- **Navigation** - Smooth scroll navigation
- **Background** - Animated shader background
- **Layout** - Main layout wrapper

## 🌐 Deployment

This site can be deployed to any static hosting service:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

```bash
npm run build
# Deploy the dist/ directory
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 👤 Contact

**Ruben Luna**

- Email: rubenaluna@outlook.com
- LinkedIn: [linkedin.com/in/rubenaluna](https://linkedin.com/in/rubenaluna)
- GitHub: [github.com/rubenaluna](https://github.com/rubenaluna)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
