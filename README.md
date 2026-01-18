# Personal Portfolio 

A modern, interactive personal portfolio website built with React and Vite. This template features smooth animations, an interactive background, and a fully responsive design to showcase your work and skills.

## Features

- **Interactive Background**: Animated floating elements with natural motion effects
- **Smooth Animations**: Leveraging Framer Motion for polished transitions
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Type-Safe Routing**: TanStack React Router with file-based routing
- **Fast Development**: Vite for lightning-fast HMR (Hot Module Replacement)
- **Code Quality**: ESLint configuration for consistent code standards
- **Typewriter Effect**: Dynamic text animations with react-simple-typewriter
- **Icon Library**: React Icons for elegant iconography

## Sections Included

- **Home/Hero**: Landing section with typewriter effect and interactive background
- **Experience**: Professional experience and timeline
- **Projects**: Showcase your work with project cards
- **Skills**: Display your technical skills and expertise
- **Navigation**: Smooth navbar for easy navigation
- **Footer**: Site footer with contact information

## Tech Stack

- **Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: TanStack React Router 1.127.3
- **Animations**: Framer Motion 12.23.7
- **Icons**: React Icons 5.5.0
- **Effects**: react-simple-typewriter 5.0.1
- **Language**: JavaScript/TypeScript

## Installation

1. Clone or download this template
2. Install dependencies:
   ```bash
   npm install
   ```

## Getting Started

### Development Server
Start the development server with hot reload:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Check code quality with ESLint:
```bash
npm run lint
```

## Project Structure

```
src/
├── routes/                 # Page components
│   ├── index.tsx          # Home page
│   ├── about.tsx          # About section
│   ├── experience.tsx     # Experience section
│   ├── project.tsx        # Projects section
│   ├── skills.tsx         # Skills section
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer
│   └── __root.tsx         # Root layout
├── App.jsx                # Main app component
├── main.jsx               # Entry point
├── interactivebackground.jsx  # Animated background
└── styles/
    └── index.css          # Global styles
```

## Customization

### Colors & Styling
Modify Tailwind CSS classes in component files to match your brand colors.

### Content
Update the route components in `src/routes/` with your own:
- Personal information in `about.tsx`
- Work history in `experience.tsx`
- Project details in `project.tsx`
- Skills list in `skills.tsx`

### Images
Add your project images and icons to the `public/` directory:
- Project images in `public/projImage/`
- Custom icons in `public/icons/`

### Animation Settings
Customize the interactive background particles by adjusting parameters in `src/interactivebackground.jsx`:
- Particle size and colors
- Movement speed and amplitude
- Opacity and fade effects

## Dependencies

See `package.json` for complete dependency list. Key libraries:
- React: UI framework
- Vite: Build tool and dev server
- Tailwind CSS: Utility-first CSS framework
- Framer Motion: Animation library
- TanStack Router: Client-side routing
- React Icons: Icon components
