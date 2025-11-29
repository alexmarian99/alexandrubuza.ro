# Alexandru Buza Portfolio Website

A modern, animated portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features smooth animations using Motion (Framer Motion) and a sleek gaming-themed design.

## Features

- 🎨 Modern, dark-themed UI with gradient accents
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎮 Gaming-inspired aesthetic
- 📄 Printable CV page
- 🚀 Fast and optimized with Vite

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Motion** (Framer Motion) - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CVPage.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── ImageWithFallback.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── lib/         # Utility functions
│   │   └── utils.ts
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Customization

### Updating Content

To customize the portfolio content, edit the data in the respective component files:

- **Personal Info**: `src/components/Header.tsx`
- **About Section**: `src/components/About.tsx`
- **Work Experience**: `src/components/Experience.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Contact Info**: `src/components/Contact.tsx` and `src/components/CVPage.tsx`

### Styling

The project uses Tailwind CSS for styling. The color scheme and theme are based on:
- Cyan (#06b6d4)
- Purple (#a855f7)
- Pink (#ec4899)
- Dark background (#0a0e27)

To change colors, update the classes in component files or extend the Tailwind config.

## Building for Production

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Deployment

The built application can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## CV Page

The portfolio includes a dedicated CV page accessible via the "View CV" button or by navigating to `#cv`. The CV page is printer-friendly and can be saved as PDF using the browser's print function.

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Design inspired by modern gaming aesthetics
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Motion](https://motion.dev/)
