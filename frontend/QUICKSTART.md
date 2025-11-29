# Quick Start Guide

## Setup Instructions

1. **Open Terminal in the frontend directory**
   ```bash
   cd "d:\Projects\AlexandruBuza Website\frontend"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to `http://localhost:5173`
   - The portfolio will automatically reload when you make changes

## Project Overview

This is a complete React portfolio website with:

### Pages
- **Main Portfolio** - Showcases all sections (Header, About, Experience, Skills, Projects, Contact)
- **CV Page** - Printable resume accessible via the "View CV" button or `#cv` hash

### Components
- `Header.tsx` - Hero section with profile image and social links
- `About.tsx` - Introduction and statistics
- `Experience.tsx` - Work history timeline
- `Skills.tsx` - Technical skills with progress bars
- `Projects.tsx` - Portfolio projects with images
- `Contact.tsx` - Contact information and social links
- `CVPage.tsx` - Printable CV/resume page
- `ImageWithFallback.tsx` - Image component with error handling

### Customization Tips

1. **Update Personal Information**
   - Edit `Header.tsx` for your name and title
   - Update `CVPage.tsx` for CV details
   - Modify `Contact.tsx` for your contact info

2. **Add Your Projects**
   - Edit the `projects` array in `Projects.tsx`
   - Replace image URLs with your project screenshots

3. **Update Experience**
   - Edit the `experiences` array in `Experience.tsx`
   - Add your work history

4. **Customize Skills**
   - Edit the `skillCategories` array in `Skills.tsx`
   - Adjust skill levels (0-100)

5. **Change Colors**
   - The theme uses cyan, purple, and pink
   - Search for color classes (e.g., `text-cyan-400`) to change them

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Module Not Found
Make sure all dependencies are installed:
```bash
npm install
```

### TypeScript Errors
Check that all imports are correct and types are properly defined.

## Next Steps

1. Replace placeholder images with your own
2. Update all personal information
3. Add your actual projects and experience
4. Customize colors to match your brand
5. Test the CV printing functionality
6. Deploy to your preferred hosting service

Enjoy your new portfolio! 🚀
