# Dark Mode Implementation

This Jekyll template now includes a complete light/dark theme system with the following features:

## Features

### 🌓 Theme Toggle Button
- Located in the top-right corner of the navigation
- Available on both desktop and mobile layouts
- Shows sun icon in dark mode, moon icon in light mode
- Smooth icon transitions with proper accessibility labels

### 🎨 System Preference Detection
- Automatically detects user's system theme preference on first visit
- Uses `window.matchMedia('(prefers-color-scheme: dark)')` for detection
- Falls back to light theme if system preference is unavailable

### 💾 localStorage Persistence
- Saves user's theme choice to localStorage
- Persists across browser sessions and page reloads
- Overrides system preference once user makes a manual choice

### ⚡ Smooth Transitions
- All theme changes include smooth 200ms transitions
- Consistent transition timing across all components
- No jarring color switches when toggling themes

## Technical Implementation

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // Uses class-based dark mode
  // ... rest of config
}
```

### JavaScript Theme Controller
- `ThemeToggle.init()` - Initializes theme system
- `setInitialTheme()` - Detects system preference and sets initial theme
- `toggleTheme()` - Handles manual theme switching
- `applyTheme()` - Applies theme classes to document
- `updateToggleButton()` - Updates button icons

### CSS Classes Used
- `dark:` prefix for all dark mode styles
- `transition-colors duration-200` for smooth transitions
- Comprehensive dark mode support for all components

## Components with Dark Mode Support

### Navigation
- Header background: `bg-white dark:bg-gray-900`
- Navigation links: `text-gray-700 dark:text-gray-200`
- Mobile menu: `bg-gray-50 dark:bg-gray-800`

### Content Areas
- Body: `bg-gray-50 dark:bg-gray-900`
- Cards: `bg-white dark:bg-gray-800`
- Text: `text-gray-900 dark:text-white`

### Interactive Elements
- Buttons: Full dark mode variants
- Hover states: Appropriate dark mode colors
- Focus states: Proper contrast ratios

### Footer
- Background: `bg-gray-50 dark:bg-gray-800`
- Links: `text-gray-600 dark:text-gray-300`
- Borders: `border-gray-200 dark:border-gray-700`

## Usage

### For Users
1. Click the theme toggle button in the top-right corner
2. Theme preference is automatically saved
3. System preference is respected on first visit

### For Developers
1. Use `dark:` prefix for all dark mode styles
2. Include `transition-colors duration-200` for smooth transitions
3. Test both themes during development
4. Ensure proper contrast ratios for accessibility

## Browser Support
- Modern browsers with CSS custom properties support
- Graceful fallback to light theme in older browsers
- localStorage support required for persistence

## Accessibility
- Proper ARIA labels on toggle button
- Sufficient contrast ratios in both themes
- Keyboard navigation support
- Screen reader friendly

## Testing
Build and test the theme system:
```bash
npm run build
npm run dev
```

The theme toggle should work immediately, with smooth transitions between light and dark modes.