/**
 * Theme Configuration
 * 
 * This file contains all theme customization options.
 * Modify these values to customize your site's appearance.
 */

module.exports = {
  // Primary brand colors
  // Change these to match your brand
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',  // Main brand color - change this!
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    
    // Alternative color schemes (uncomment to use)
    
    // Green theme
    // primary: {
    //   50: '#f0fdf4',
    //   100: '#dcfce7',
    //   200: '#bbf7d0',
    //   300: '#86efac',
    //   400: '#4ade80',
    //   500: '#22c55e',
    //   600: '#16a34a',
    //   700: '#15803d',
    //   800: '#166534',
    //   900: '#14532d',
    // },
    
    // Purple theme
    // primary: {
    //   50: '#faf5ff',
    //   100: '#f3e8ff',
    //   200: '#e9d5ff',
    //   300: '#d8b4fe',
    //   400: '#c084fc',
    //   500: '#a855f7',
    //   600: '#9333ea',
    //   700: '#7c3aed',
    //   800: '#6b21a8',
    //   900: '#581c87',
    // },
    
    // Orange theme
    // primary: {
    //   50: '#fff7ed',
    //   100: '#ffedd5',
    //   200: '#fed7aa',
    //   300: '#fdba74',
    //   400: '#fb923c',
    //   500: '#f97316',
    //   600: '#ea580c',
    //   700: '#c2410c',
    //   800: '#9a3412',
    //   900: '#7c2d12',
    // },
  },

  // Typography settings
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
    
    // Alternative font options
    // sans: ['Poppins', 'system-ui', 'sans-serif'],
    // sans: ['Roboto', 'system-ui', 'sans-serif'],
    // sans: ['Open Sans', 'system-ui', 'sans-serif'],
  },

  // Theme mode settings
  theme: {
    // Default theme mode: 'light', 'dark', or 'system'
    defaultMode: 'system',
    
    // Allow theme switching
    allowToggle: true,
    
    // Store theme preference in localStorage
    persistPreference: true,
    
    // Transition duration for theme changes (in ms)
    transitionDuration: 200,
  },

  // Light theme colors
  light: {
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      muted: '#9ca3af',
    },
    border: {
      primary: '#e5e7eb',
      secondary: '#d1d5db',
    }
  },

  // Dark theme colors
  dark: {
    background: {
      primary: '#111827',
      secondary: '#1f2937',
      tertiary: '#374151',
    },
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
      muted: '#9ca3af',
    },
    border: {
      primary: '#374151',
      secondary: '#4b5563',
    }
  },

  // Component-specific settings
  components: {
    // Navigation
    nav: {
      height: '4rem', // 64px
      blur: true,
      sticky: true,
    },
    
    // Cards
    card: {
      borderRadius: '0.5rem', // 8px
      shadow: 'md',
    },
    
    // Buttons
    button: {
      borderRadius: '0.5rem', // 8px
      fontWeight: 'medium',
    },
  },

  // Animation settings
  animations: {
    // Enable/disable animations globally
    enabled: true,
    
    // Default transition duration
    duration: '200ms',
    
    // Easing functions
    easing: {
      default: 'ease-in-out',
      in: 'ease-in',
      out: 'ease-out',
    },
  },
};