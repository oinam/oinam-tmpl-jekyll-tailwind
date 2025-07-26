# Deployment Guide

This template includes automated deployment to GitHub Pages using GitHub Actions.

## GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`) automatically:

1. **Triggers on**:
   - Push to `main` or `master` branch
   - Pull requests to `main` or `master` branch
   - Manual workflow dispatch

2. **Build Process**:
   - Sets up Node.js 18 and Ruby 3.1
   - Installs dependencies (npm and bundler)
   - Creates asset directories
   - Builds CSS with Tailwind CSS (minified)
   - Builds JavaScript (compressed and uglified)
   - Builds Jekyll site with production settings
   - Uploads build artifact

3. **Deployment**:
   - Deploys to GitHub Pages (only on main/master branch)
   - Updates the live site automatically

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Save the configuration

### 2. Ensure Dependencies

Make sure these files are committed:
- `package.json` - Node.js dependencies
- `package-lock.json` - Dependency lock file (now included)
- `Gemfile` - Ruby dependencies
- `Gemfile.lock` - Ruby dependency lock file

### 3. Configure Repository Settings

Update `_config.yml` with your repository details:

```yaml
title: "Your Site Title"
description: "Your site description"
baseurl: "/your-repository-name"  # Repository name
url: "https://yourusername.github.io"  # Your GitHub Pages URL
```

## Build Process Details

### Assets Built:
- **CSS**: `assets/css/style.css` (Tailwind CSS, minified)
- **JavaScript**: `assets/js/main.min.js` (compressed, uglified)
- **Jekyll Site**: Complete static site in `_site/`

### Build Commands:
```bash
npm run build:css    # Build CSS
npm run build:js     # Build JavaScript  
npm run build        # Build both CSS and JS
bundle exec jekyll build  # Build Jekyll site
```

## Local Development

### Prerequisites:
- Node.js 18+
- Ruby 3.1+
- Bundler gem

### Setup:
```bash
# Install dependencies
npm install
bundle install

# Development server
npm run dev
# or
bundle exec jekyll serve --livereload
```

### Build locally:
```bash
# Build assets
npm run build

# Build Jekyll site
bundle exec jekyll build

# Or use the build script
./build.sh
```

## Troubleshooting

### Common Issues:

#### 1. "Dependencies lock file is not found"
- **Cause**: `package-lock.json` was in `.gitignore`
- **Fix**: Removed from `.gitignore`, commit the lock file

#### 2. "Build failed - CSS not found"
- **Cause**: Assets directory doesn't exist
- **Fix**: Workflow now creates directories before building

#### 3. "JavaScript build errors"
- **Cause**: Terser compilation issues
- **Fix**: Check JavaScript syntax in `src/js/main.js`

#### 4. "Jekyll build fails"
- **Cause**: Missing dependencies or configuration errors
- **Fix**: Check `_config.yml` and ensure all dependencies are installed

### Debug Steps:

1. **Check workflow logs** in GitHub Actions tab
2. **Test locally** with same Node.js/Ruby versions
3. **Verify file paths** in build commands
4. **Check dependencies** are properly locked

## Performance Optimizations

The workflow includes several optimizations:

1. **Dependency Caching**: npm cache for faster installs
2. **Bundler Cache**: Ruby gem caching
3. **Asset Minification**: CSS and JS are compressed
4. **Production Build**: Jekyll runs in production mode

## Security

The workflow uses:
- **Minimal permissions**: Only what's needed for Pages deployment
- **Pinned actions**: Specific versions for security
- **No secrets required**: Uses built-in GitHub tokens

## Customization

### Change Node.js Version:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'  # Change version here
```

### Change Ruby Version:
```yaml
- name: Setup Ruby
  uses: ruby/setup-ruby@v1
  with:
    ruby-version: '3.2'  # Change version here
```

### Add Build Steps:
```yaml
- name: Custom build step
  run: your-custom-command
```

### Environment Variables:
```yaml
- name: Build Jekyll site
  run: bundle exec jekyll build
  env:
    JEKYLL_ENV: production
    CUSTOM_VAR: value
```

## Monitoring

### Check Deployment Status:
1. Go to repository "Actions" tab
2. View latest workflow run
3. Check build and deploy steps
4. View deployment URL in deploy step

### Site Updates:
- Changes to `main`/`master` trigger automatic deployment
- Build takes ~2-3 minutes typically
- Site updates within minutes of successful deployment

## Alternative Deployment

### Manual Deployment:
```bash
# Build locally
npm run build
bundle exec jekyll build

# Deploy _site/ contents to your hosting provider
```

### Other Platforms:
- **Netlify**: Connect repository, set build command to `npm run build && bundle exec jekyll build`
- **Vercel**: Similar setup with build commands
- **Custom Server**: Deploy `_site/` contents after build