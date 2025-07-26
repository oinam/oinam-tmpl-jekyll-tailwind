---
layout: post
title: "Welcome to Oinam's Jekyll Tailwind Template"
description: "Get started with Oinam's modern Jekyll template featuring Tailwind CSS, responsive design, and automated deployment."
date: 2024-01-01 10:00:00 +0000
categories: [tutorial, getting-started]
tags: [jekyll, tailwind, template, web-development]
author: "Oinam"
---

Welcome to **Oinam's Jekyll Tailwind Template**! This post will help you get started with your new Jekyll site powered by Tailwind CSS.

## What You Get

This template provides everything you need to build a modern, fast, and beautiful website:

### 🚀 Modern Technology Stack

- **Jekyll 4.x** for static site generation
- **Tailwind CSS 3.4** for utility-first styling
- **GitHub Actions** for automated deployment
- **Responsive design** that works on all devices

### 🎨 Pre-built Components

The template includes several pre-styled components:

<div class="my-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
  <strong>Info Box:</strong> This is an example of a styled info box using Tailwind CSS classes.
</div>

<div class="flex flex-wrap gap-4 my-6">
  <button class="btn btn-primary">Primary Button</button>
  <button class="btn btn-secondary">Secondary Button</button>
</div>

### 📝 Content Creation

Creating new content is straightforward:

#### Blog Posts

Create new posts in the `_posts/` directory with the naming convention `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
description: "SEO-friendly description"
date: 2024-01-01
categories: [blog, tutorial]
tags: [jekyll, web-development]
---

Your content here...
```

#### Pages

Add new pages in the `_pages/` directory:

```markdown
---
layout: page
title: "Page Title"
permalink: /your-page/
---

Your page content...
```

## Customization

### Colors and Themes

Modify `tailwind.config.js` to customize your color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
        500: '#your-color',
        600: '#your-darker-color',
      }
    }
  }
}
```

### Typography

The template uses the `@tailwindcss/typography` plugin for beautiful prose styling. All content in `.prose` containers will be automatically styled.

### Layouts

Three main layouts are available:

1. **default.html** - Base layout with header and footer
2. **page.html** - For static pages
3. **post.html** - For blog posts with metadata

## Development Workflow

### Local Development

Start the development server with hot reload:

```bash
npm run dev
```

This command will:
- Start Tailwind CSS in watch mode
- Launch Jekyll development server
- Enable live reload for instant updates

### Building for Production

Create a production build:

```bash
npm run build
```

### Deployment

The template includes a GitHub Actions workflow that automatically:

1. Installs dependencies
2. Builds Tailwind CSS
3. Generates the Jekyll site
4. Deploys to GitHub Pages

Simply push to your main branch and your site will be live!

## Next Steps

1. **Customize the design** by editing `tailwind.config.js`
2. **Add your content** in `_posts/` and `_pages/`
3. **Update site settings** in `_config.yml`
4. **Modify navigation** in `_includes/header.html`
5. **Deploy to GitHub Pages** by pushing to your repository

## Need Help?

- Check the [README.md](https://github.com/oinam/oinam-tmpl-jekyll-tailwind) for detailed documentation
- Browse the [Jekyll documentation](https://jekyllrb.com/docs/)
- Explore [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Open an issue on [GitHub](https://github.com/oinam/oinam-tmpl-jekyll-tailwind/issues)

Happy building! 🎉