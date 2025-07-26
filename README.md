# Oinam Jekyll Tailwind Template

Demo    › https://oinam.github.io/oinam-tmpl-jekyll-tailwind/
Source  › https://github.com/oinam/oinam-tmpl-jekyll-tailwind

A modern, responsive Jekyll template with Tailwind CSS integration and automated GitHub Pages deployment.

## Features

- 🚀 **Jekyll 4.x** - Modern static site generator
- 🎨 **Tailwind CSS 3.4** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Live Reload** - Hot reloading during development
- 🔧 **GitHub Actions** - Automated deployment to GitHub Pages
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- ♿ **Accessible** - WCAG compliant components
- 📝 **Typography** - Beautiful prose styling with @tailwindcss/typography

## Quick Start

### Prerequisites

- **Ruby** (version 2.7 or higher)
- **Node.js** (version 16 or higher)
- **Bundler** (`gem install bundler`)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/oinam/oinam-tmpl-jekyll-tailwind.git
   cd oinam-tmpl-jekyll-tailwind
   ```

2. **Install dependencies**
   ```bash
   # Install Ruby dependencies
   bundle install
   
   # Install Node.js dependencies
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   This will:
   - Start Tailwind CSS in watch mode
   - Start Jekyll development server with live reload
   - Open your site at `http://localhost:4000`

### Alternative Development Commands

```bash
# Build CSS only
npm run build:css

# Watch CSS changes only
npm run watch:css

# Serve Jekyll only (without CSS watching)
npm run serve

# Production build
npm run build
```

## Project Structure

```
├── _includes/          # Reusable HTML components
│   ├── head.html      # HTML head with meta tags
│   ├── header.html    # Site navigation
│   └── footer.html    # Site footer
├── _layouts/          # Page templates
│   ├── default.html   # Base layout
│   ├── page.html      # Static page layout
│   └── post.html      # Blog post layout
├── _pages/            # Static pages
├── _posts/            # Blog posts
├── _data/             # Site data files
├── assets/css/        # Generated CSS (do not edit)
├── src/styles/        # Source CSS files
│   └── main.css       # Tailwind CSS entry point
├── _config.yml        # Jekyll configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Node.js dependencies
```

## Customization

### Tailwind CSS

Edit `src/styles/main.css` to customize your styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .your-custom-component {
    @apply bg-blue-500 text-white p-4 rounded;
  }
}
```

Modify `tailwind.config.js` to customize your design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom color palette
        }
      }
    }
  }
}
```

### Jekyll Configuration

Edit `_config.yml` to update site settings:

```yaml
title: "Your Site Title"
description: "Your site description"
url: "https://yourusername.github.io"
author:
  name: "Your Name"
  email: "your.email@example.com"
```

### Navigation

Update the navigation in `_includes/header.html` or create a data file in `_data/navigation.yml`:

```yaml
main:
  - name: "Home"
    url: "/"
  - name: "About"
    url: "/about/"
  - name: "Blog"
    url: "/blog/"
```

## Content Creation

### Creating Pages

Create new pages in the `_pages/` directory:

```markdown
---
layout: page
title: "About"
description: "Learn more about us"
permalink: /about/
---

Your page content here...
```

### Creating Blog Posts

Create new posts in the `_posts/` directory with the naming convention `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
description: "Post description for SEO"
date: 2024-01-01
categories: [blog, tutorial]
tags: [jekyll, tailwind]
---

Your post content here...
```

## Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic deployment**
   - GitHub Actions will automatically build and deploy your site
   - Check the "Actions" tab for build status
   - Your site will be available at `https://yourusername.github.io/oinam-tmpl-jekyll-tailwind`

### Manual Deployment

For other hosting providers:

```bash
# Build the site
npm run build

# Deploy the _site/ directory to your hosting provider
```

## GitHub Actions Workflow

The included `.github/workflows/deploy.yml` handles:

- ✅ Node.js and Ruby environment setup
- ✅ Dependency installation
- ✅ Tailwind CSS compilation
- ✅ Jekyll site building
- ✅ Deployment to GitHub Pages

## Troubleshooting

### Common Issues

**CSS not loading:**
- Ensure you've run `npm run build:css` or `npm run dev`
- Check that `assets/css/style.css` exists

**Jekyll build errors:**
- Run `bundle install` to ensure all gems are installed
- Check `_config.yml` for syntax errors

**Node.js dependency issues:**
- Delete `node_modules/` and run `npm install`
- Ensure you're using Node.js 16 or higher

**GitHub Pages deployment fails:**
- Check the Actions tab for detailed error logs
- Ensure your repository has Pages enabled
- Verify the workflow file syntax

### Development Tips

- Use `npm run dev` for the best development experience
- The site will automatically reload when you make changes
- CSS changes are compiled automatically in watch mode
- Check browser console for any JavaScript errors

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [GitHub Pages](https://pages.github.com/) - Free hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD platform