# Theme Customization Guide

This Jekyll template provides comprehensive theme customization options through the `theme.config.js` file and Tailwind CSS configuration.

## Quick Start

### 1. Change Primary Brand Color

Edit `theme.config.js` and modify the primary color palette:

```javascript
colors: {
  primary: {
    500: '#22c55e',  // Change this to your brand color
    // The other shades will be generated automatically
  }
}
```

### 2. Switch to Pre-defined Color Schemes

Uncomment one of the alternative color schemes in `theme.config.js`:

```javascript
// Green theme
primary: {
  50: '#f0fdf4',
  100: '#dcfce7',
  // ... rest of green palette
},

// Purple theme  
primary: {
  50: '#faf5ff',
  100: '#f3e8ff',
  // ... rest of purple palette
},

// Orange theme
primary: {
  50: '#fff7ed',
  100: '#ffedd5', 
  // ... rest of orange palette
},
```

### 3. Customize Typography

Change fonts in `theme.config.js`:

```javascript
fonts: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
}
```

## Advanced Customization

### Theme Mode Configuration

Control default theme behavior:

```javascript
theme: {
  defaultMode: 'light',        // 'light', 'dark', or 'system'
  allowToggle: true,           // Enable/disable theme toggle
  persistPreference: true,     // Save user preference
  transitionDuration: 200,     // Theme transition speed (ms)
}
```

### Light/Dark Theme Colors

Customize specific theme colors:

```javascript
light: {
  background: {
    primary: '#ffffff',     // Main background
    secondary: '#f9fafb',   // Secondary background
    tertiary: '#f3f4f6',    // Tertiary background
  },
  text: {
    primary: '#111827',     // Main text color
    secondary: '#6b7280',   // Secondary text
    muted: '#9ca3af',       // Muted text
  },
  border: {
    primary: '#e5e7eb',     // Main borders
    secondary: '#d1d5db',   // Secondary borders
  }
},
```

### Component Styling

Customize component defaults:

```javascript
components: {
  nav: {
    height: '4rem',         // Navigation height
    blur: true,             // Enable backdrop blur
    sticky: true,           // Sticky navigation
  },
  card: {
    borderRadius: '0.5rem', // Card border radius
    shadow: 'md',           // Card shadow
  },
  button: {
    borderRadius: '0.5rem', // Button border radius
    fontWeight: 'medium',   // Button font weight
  },
}
```

### Animation Settings

Control animations globally:

```javascript
animations: {
  enabled: true,              // Enable/disable all animations
  duration: '200ms',          // Default transition duration
  easing: {
    default: 'ease-in-out',   // Default easing
    in: 'ease-in',            // Ease in
    out: 'ease-out',          // Ease out
  },
}
```

## Color Palette Generator

To generate a complete color palette from a single color, you can use tools like:

- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors.co](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)

## Using Custom Colors in Templates

Once you've configured your theme, use the colors in your templates:

### Primary Colors
```html
<div class="bg-primary-500 text-white">
  Primary background
</div>
```

### Theme-aware Colors
```html
<div class="bg-theme-light-bg dark:bg-theme-dark-bg">
  Theme-aware background
</div>
```

### Semantic Classes
The template includes semantic CSS classes that automatically adapt:

```html
<div class="card">           <!-- Auto light/dark card -->
<button class="btn-primary"> <!-- Auto light/dark button -->
<a class="nav-link">         <!-- Auto light/dark nav link -->
```

## Build Process

After making changes to `theme.config.js`:

1. **Development**: Changes are automatically picked up
   ```bash
   npm run dev
   ```

2. **Production**: Rebuild assets
   ```bash
   npm run build
   ```

## Popular Color Schemes

### Blue (Default)
```javascript
primary: { 500: '#3b82f6' }
```

### Green
```javascript  
primary: { 500: '#22c55e' }
```

### Purple
```javascript
primary: { 500: '#a855f7' }
```

### Orange
```javascript
primary: { 500: '#f97316' }
```

### Red
```javascript
primary: { 500: '#ef4444' }
```

### Indigo
```javascript
primary: { 500: '#6366f1' }
```

## Testing Your Theme

1. **Light Mode**: Test all components in light mode
2. **Dark Mode**: Toggle to dark mode and verify contrast
3. **System Mode**: Test system preference detection
4. **Responsive**: Check mobile and desktop layouts
5. **Accessibility**: Ensure proper contrast ratios

## Troubleshooting

### Colors Not Updating
- Restart the development server
- Clear browser cache
- Check for syntax errors in `theme.config.js`

### Dark Mode Issues
- Verify `darkMode: 'class'` in `tailwind.config.js`
- Check that dark mode classes are properly applied
- Ensure JavaScript theme toggle is working

### Build Errors
- Validate `theme.config.js` syntax
- Check that all required properties are defined
- Ensure Tailwind CSS is properly configured

## Best Practices

1. **Consistency**: Use the same color palette throughout
2. **Contrast**: Ensure sufficient contrast for accessibility
3. **Testing**: Test both light and dark modes thoroughly
4. **Performance**: Avoid too many custom colors (impacts bundle size)
5. **Documentation**: Document any custom modifications for your team