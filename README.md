# Luminarch - Architectural Lighting Website

A modern, dark-themed React + Vite landing page for Luminarch, an architectural lighting manufacturer inspired by premium lighting company websites.

## 🌟 Features

- **Modern Dark Theme**: Elegant dark design with gold accents
- **Responsive Design**: Fully responsive across all device sizes
- **Component-Based Architecture**: Clean, reusable React components
- **Smooth Animations**: Engaging hover effects and transitions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation header with mobile menu
│   ├── Hero/            # Main hero section with CTA
│   ├── Products/        # Product categories showcase
│   ├── Projects/        # Project portfolio sections
│   └── Footer/          # Footer with contact info and newsletter
├── App.jsx              # Main application component
├── App.css              # Application-specific styles
├── index.css            # Global styles and CSS variables
└── main.jsx             # Application entry point
```

## 🎨 Design Features

### Color Palette
- **Primary Background**: `#0a0a0a` (Deep black)
- **Secondary Background**: `#1a1a1a` (Dark gray)
- **Accent Color**: `#b8860b` (Gold)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#cccccc` (Light gray)

### Components Overview

#### Header
- Fixed navigation with backdrop blur
- Responsive mobile hamburger menu
- Smooth hover animations
- Brand logo with gradient effect

#### Hero Section
- Full-viewport height with overlay
- Animated text reveal
- Call-to-action buttons
- Scroll indicator animation

#### Products Section
- Grid layout for product categories
- Glass-morphism card design
- Hover effects with image scaling
- Responsive grid system

#### Projects Section
- Multiple project type categories
- Image overlays with project information
- Staggered animations
- Mobile-optimized layout

#### Footer
- Company information and branding
- Newsletter subscription form
- Social media links
- Responsive multi-column layout

## 🚀 Netlify Deployment

### Quick Deploy
1. **Connect to Netlify**:
   - Push code to GitHub/GitLab repository
   - Connect repository to Netlify
   - Netlify will auto-detect Vite settings

2. **Build Settings** (Auto-detected):
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: 18+

3. **Manual Deploy**:
   ```bash
   npm run build
   # Upload the 'dist' folder to Netlify
   ```

### Deployment Optimizations
- ✅ **Netlify configuration** (`netlify.toml`) included
- ✅ **SPA routing** configured with redirects
- ✅ **Security headers** set for production
- ✅ **Asset caching** optimized for performance
- ✅ **SEO ready** with meta tags and robots.txt

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd luminarch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🖼️ Images

The project includes placeholder image paths. Replace the following placeholder images in `/public/images/` with actual content:

- `hero-lighting.jpg` - Main hero background
- Product category images (6 total)
- Project showcase images (8 total)

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Advanced styling with CSS variables
- **Modern JavaScript (ES6+)**: Clean, modern code

## 📦 Build for Production

```bash
npm run build
```

## 🎯 Performance Optimizations

- Lazy loading for images
- CSS animations with `transform` and `opacity` for smooth performance
- Minimal bundle size with Vite
- Optimized font loading with Google Fonts

## 🔧 Customization

### Changing Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-bg: #0a0a0a;
  --accent-color: #b8860b;
  /* Add your custom colors */
}
```

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation links in `Header.jsx`

## 📄 License

This project is created for demonstration purposes. Please ensure you have proper licenses for any images or content used in production.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ and ⚡ Vite

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
