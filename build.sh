#!/bin/bash

# Build script for Oinam Jekyll Tailwind Template
echo "🚀 Building Oinam Jekyll Tailwind Template..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing Node.js dependencies..."
    npm install
fi

if [ ! -f "Gemfile.lock" ]; then
    echo "💎 Installing Ruby dependencies..."
    bundle install
fi

# Build CSS with Tailwind CSS
echo "🎨 Building Tailwind CSS..."
npm run build:css

# Build and compress JavaScript
echo "⚡ Building and compressing JavaScript..."
npm run build:js

# Build Jekyll site
echo "🏗️  Building Jekyll site..."
bundle exec jekyll build

echo "✅ Build complete! Site is ready in _site/"