---
layout: page
title: "Contact"
description: "Get in touch with us about the Jekyll Tailwind template or your project needs."
permalink: /contact/
---

## Get In Touch

We'd love to hear from you! Whether you have questions about the template, need help with implementation, or want to share what you've built, don't hesitate to reach out.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
  <div class="card">
    <div class="card-body">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">GitHub Issues</h3>
      <p class="text-gray-600 mb-4">
        For bug reports, feature requests, or technical questions, please use our GitHub repository.
      </p>
      <a href="https://github.com/oinam/oinam-tmpl-jekyll-tailwind/issues" 
         target="_blank" 
         rel="noopener"
         class="btn btn-primary">
        Open an Issue
      </a>
    </div>
  </div>
  
  <div class="card">
    <div class="card-body">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Discussions</h3>
      <p class="text-gray-600 mb-4">
        Join our community discussions for general questions, ideas, and showcasing your projects.
      </p>
      <a href="https://github.com/oinam/oinam-tmpl-jekyll-tailwind/discussions" 
         target="_blank" 
         rel="noopener"
         class="btn btn-secondary">
        Join Discussion
      </a>
    </div>
  </div>
</div>

### Quick Links

- **📚 Documentation**: [README.md](https://github.com/oinam/oinam-tmpl-jekyll-tailwind#readme)
- **🐛 Bug Reports**: [GitHub Issues](https://github.com/oinam/oinam-tmpl-jekyll-tailwind/issues)
- **💡 Feature Requests**: [GitHub Issues](https://github.com/oinam/oinam-tmpl-jekyll-tailwind/issues)
- **🗣️ General Discussion**: [GitHub Discussions](https://github.com/oinam/oinam-tmpl-jekyll-tailwind/discussions)

### Contact Form

<div class="max-w-2xl">
  <form class="space-y-6" action="#" method="POST">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
      <input type="text" 
             id="name" 
             name="name" 
             required
             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
    </div>
    
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input type="email" 
             id="email" 
             name="email" 
             required
             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
    </div>
    
    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
      <select id="subject" 
              name="subject" 
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
        <option value="">Select a topic</option>
        <option value="general">General Question</option>
        <option value="bug">Bug Report</option>
        <option value="feature">Feature Request</option>
        <option value="help">Need Help</option>
        <option value="showcase">Project Showcase</option>
      </select>
    </div>
    
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
      <textarea id="message" 
                name="message" 
                rows="6" 
                required
                placeholder="Tell us more about your question or project..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
    </div>
    
    <div>
      <button type="submit" class="btn btn-primary">
        Send Message
      </button>
    </div>
  </form>
</div>

<div class="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
  <p class="text-yellow-800">
    <strong>Note:</strong> This is a demo contact form. To make it functional, you'll need to integrate it with a form handling service like Formspree, Netlify Forms, or your own backend.
  </p>
</div>

### Community Guidelines

When reaching out, please:

- **Be respectful** and constructive in your communication
- **Search existing issues** before creating new ones
- **Provide details** when reporting bugs (OS, browser, steps to reproduce)
- **Share your use case** when requesting features
- **Show your work** when showcasing projects built with this template

We're excited to see what you build with Oinam's Jekyll Tailwind template!