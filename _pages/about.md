---
layout: page
title: "About"
description: "Learn more about this Jekyll Tailwind template and how to use it for your projects."
permalink: /about/
---

## About This Template

Oinam's Jekyll Tailwind template combines the power of **Jekyll's static site generation** with **Tailwind CSS's utility-first styling** to create a modern, fast, and maintainable web development foundation.

### What Makes This Template Special?

- **🚀 Performance First**: Static site generation ensures lightning-fast load times
- **🎨 Modern Styling**: Tailwind CSS v4.1 with the latest features and improvements  
- **📱 Responsive Design**: Mobile-first approach that works on all devices
- **⚡ Developer Experience**: Hot reload, live CSS compilation, and clear documentation
- **🔧 Automated Deployment**: GitHub Actions workflow for seamless deployment
- **♿ Accessibility**: WCAG compliant components and semantic HTML

### Technology Stack

This template is built with carefully selected modern web technologies:

#### Frontend
- **Jekyll 4.x** - Ruby-based static site generator
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Vanilla JavaScript** - No heavy frameworks, just clean JS when needed

#### Development Tools
- **Node.js & npm** - Package management and build tools
- **Bundler** - Ruby dependency management
- **Concurrently** - Run multiple development servers simultaneously

#### Deployment & CI/CD
- **GitHub Actions** - Automated testing and deployment
- **GitHub Pages** - Free, reliable hosting
- **Git** - Version control and collaboration

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/oinam/oinam-tmpl-jekyll-tailwind.git
   cd oinam-tmpl-jekyll-tailwind
   ```

2. **Install dependencies**
   ```bash
   bundle install
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

### Customization

The template is designed to be easily customizable:

- **Colors & Themes**: Modify `tailwind.config.js` to change the color palette
- **Typography**: Update font families and sizes in the Tailwind config
- **Layout**: Edit the layouts in `_layouts/` directory
- **Content**: Add your pages in `_pages/` and posts in `_posts/`
- **Components**: Create reusable components in `_includes/`

### Project Structure

```
├── _includes/          # Reusable components
├── _layouts/           # Page templates  
├── _pages/             # Static pages
├── _posts/             # Blog posts
├── _data/              # Site data files
├── assets/             # Generated assets
├── src/styles/         # Source CSS files
├── .github/workflows/  # GitHub Actions
└── _config.yml         # Jekyll configuration
```

### Contributing

We welcome contributions! Whether it's:

- 🐛 Bug fixes
- ✨ New features  
- 📚 Documentation improvements
- 🎨 Design enhancements

Please feel free to open an issue or submit a pull request.

### License

This template is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

**Ready to build something amazing?** Check out the [documentation](/) or [view the source code](https://github.com/oinam/oinam-tmpl-jekyll-tailwind) to get started!