# Build Process

This Jekyll template includes automated compression and uglification for both CSS and JavaScript files.

## Dependencies

The following tools are used for asset processing:

- **Tailwind CSS**: CSS framework with built-in minification
- **Terser**: JavaScript compression and uglification
- **PostCSS**: CSS processing with cssnano for additional optimization
- **Concurrently**: Run multiple build processes simultaneously

## Build Scripts

### Development
```bash
npm run dev
```
Starts development mode with:
- CSS watching and compilation
- JavaScript watching and compression
- Jekyll live reload server

### Production Build
```bash
npm run build
# or
./build.sh
```
Builds optimized assets:
- Minified CSS with Tailwind CSS
- Compressed and uglified JavaScript
- Complete Jekyll site build

### Individual Asset Building

#### CSS Only
```bash
npm run build:css    # Build minified CSS
npm run watch:css    # Watch and rebuild CSS
```

#### JavaScript Only
```bash
npm run build:js     # Build compressed JavaScript
npm run watch:js     # Watch and rebuild JavaScript
```

## File Structure

```
src/
├── styles/
│   └── main.css          # Tailwind CSS source
└── js/
    └── main.js           # JavaScript source

assets/
├── css/
│   └── style.css         # Compiled CSS output
└── js/
    └── main.min.js       # Compressed JavaScript output
```

## JavaScript Features

The main.js file includes:
- Mobile menu functionality
- Smooth scrolling for anchor links
- Theme toggle support
- Utility functions for DOM manipulation

## Compression Settings

### JavaScript (Terser)
- Compression enabled
- Variable name mangling
- Dead code elimination

### CSS (Tailwind + PostCSS)
- Unused CSS purging
- Minification
- Vendor prefix optimization

## Theme Customization

The template includes comprehensive theme customization through `theme.config.js`:

### Quick Theme Changes
```javascript
// Change primary brand color
colors: {
  primary: {
    500: '#22c55e',  // Your brand color
  }
}

// Change fonts
fonts: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
}

// Configure theme behavior
theme: {
  defaultMode: 'system',     // 'light', 'dark', or 'system'
  allowToggle: true,         // Enable theme toggle
  transitionDuration: 200,   // Transition speed
}
```

See `README_THEME_CUSTOMIZATION.md` for complete documentation.

## Testing the Build

After running the build, check:
1. `assets/js/main.min.js` exists and is compressed
2. `assets/css/style.css` is minified
3. Mobile menu works on the site
4. Theme toggle functions properly in both modes
5. All JavaScript functionality is preserved after compression
6. Custom theme colors are applied correctly