# Logo Configuration

This template supports custom logos that can replace the site title in the navigation header.

## Setup

### 1. Configure Logo in _config.yml

Add the logo filename to your `_config.yml`:

```yaml
# Site settings
title: "Your Site Title"
logo: "your-logo.svg"  # Logo filename in assets/images/
```

### 2. Add Logo File

Place your logo file in the `assets/images/` directory:

```
assets/
└── images/
    └── your-logo.svg
```

### 3. Logo Requirements

#### Recommended Specifications:
- **Format**: SVG (preferred) or PNG
- **Height**: 32px (will be scaled to fit)
- **Width**: Flexible, but keep reasonable proportions
- **Background**: Transparent

#### SVG Benefits:
- Scalable for all screen sizes
- Small file size
- Easy to style with CSS
- Works well with dark mode

## Dark Mode Support

### SVG with CSS Media Queries

For SVG logos, you can include dark mode styles directly in the SVG:

```svg
<svg viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg">
  <!-- Your logo elements -->
  <text fill="currentColor">Your Text</text>
  
  <!-- Dark mode styles -->
  <style>
    @media (prefers-color-scheme: dark) {
      text { fill: #f9fafb; }
    }
  </style>
</svg>
```

### Multiple Logo Files

Alternatively, you can use different logos for light and dark modes:

```yaml
# _config.yml
logo: "logo-light.svg"
logo_dark: "logo-dark.svg"  # Optional dark mode logo
```

## Fallback Behavior

If no logo is configured, the template will display the site title as text:

```html
<!-- With logo -->
<img src="/assets/images/your-logo.svg" alt="Site Title">

<!-- Without logo (fallback) -->
<span>Site Title</span>
```

## Styling

The logo uses the `.logo` CSS class for consistent styling:

```css
.logo {
  @apply h-8 w-auto transition-colors duration-200;
}
```

### Custom Logo Styling

You can customize logo appearance in `src/styles/main.css`:

```css
.logo {
  @apply h-10 w-auto;  /* Larger logo */
}

/* Hover effects */
.logo:hover {
  @apply opacity-80;
}

/* Dark mode specific styling */
.dark .logo {
  @apply brightness-110;
}
```

## Examples

### Simple Text Logo (SVG)
```svg
<svg width="100" height="32" viewBox="0 0 100 32">
  <text x="0" y="20" font-family="system-ui" font-size="16" font-weight="600" fill="currentColor">
    BRAND
  </text>
</svg>
```

### Icon + Text Logo (SVG)
```svg
<svg width="120" height="32" viewBox="0 0 120 32">
  <!-- Icon -->
  <circle cx="16" cy="16" r="12" fill="#3b82f6"/>
  <circle cx="16" cy="16" r="6" fill="white"/>
  
  <!-- Text -->
  <text x="36" y="20" font-family="system-ui" font-size="14" font-weight="600" fill="currentColor">
    BRAND
  </text>
</svg>
```

## Testing

After adding your logo:

1. **Development**: Run `npm run dev` and check the header
2. **Light Mode**: Verify logo appears correctly
3. **Dark Mode**: Toggle theme and check logo visibility
4. **Mobile**: Test on mobile devices for proper scaling
5. **Accessibility**: Ensure alt text is descriptive

## Troubleshooting

### Logo Not Appearing
- Check file path: `assets/images/your-logo.svg`
- Verify filename matches `_config.yml`
- Ensure file permissions are correct
- Check browser console for 404 errors

### Logo Too Large/Small
- Adjust SVG viewBox dimensions
- Modify `.logo` class height in CSS
- Use responsive units (rem, em)

### Dark Mode Issues
- Add CSS media queries to SVG
- Use `currentColor` for text elements
- Test with theme toggle

### Performance
- Optimize SVG files (remove unnecessary elements)
- Use appropriate image formats
- Consider lazy loading for large logos

## Best Practices

1. **Keep it Simple**: Logos should be clear at small sizes
2. **Use SVG**: Vector format scales perfectly
3. **Test Both Themes**: Ensure visibility in light and dark modes
4. **Optimize Files**: Remove unnecessary SVG elements
5. **Consistent Branding**: Match your overall brand identity
6. **Accessibility**: Always include descriptive alt text