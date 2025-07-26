const themeConfig = require('./theme.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './_pages/**/*.md',
    './index.html',
    './index.md'
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors from theme config
        primary: themeConfig.colors.primary,
        
        // Semantic theme colors for easier customization
        theme: {
          light: {
            bg: themeConfig.light.background.primary,
            'bg-secondary': themeConfig.light.background.secondary,
            'bg-tertiary': themeConfig.light.background.tertiary,
            text: themeConfig.light.text.primary,
            'text-secondary': themeConfig.light.text.secondary,
            'text-muted': themeConfig.light.text.muted,
            border: themeConfig.light.border.primary,
            'border-secondary': themeConfig.light.border.secondary,
          },
          dark: {
            bg: themeConfig.dark.background.primary,
            'bg-secondary': themeConfig.dark.background.secondary,
            'bg-tertiary': themeConfig.dark.background.tertiary,
            text: themeConfig.dark.text.primary,
            'text-secondary': themeConfig.dark.text.secondary,
            'text-muted': themeConfig.dark.text.muted,
            border: themeConfig.dark.border.primary,
            'border-secondary': themeConfig.dark.border.secondary,
          }
        }
      },
      fontFamily: {
        sans: themeConfig.fonts.sans,
        mono: themeConfig.fonts.mono,
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
          },
        },
        // Dark mode typography
        invert: {
          css: {
            '--tw-prose-body': '#d1d5db',
            '--tw-prose-headings': '#f9fafb',
            '--tw-prose-lead': '#9ca3af',
            '--tw-prose-links': '#60a5fa',
            '--tw-prose-bold': '#f9fafb',
            '--tw-prose-counters': '#9ca3af',
            '--tw-prose-bullets': '#6b7280',
            '--tw-prose-hr': '#374151',
            '--tw-prose-quotes': '#f9fafb',
            '--tw-prose-quote-borders': '#374151',
            '--tw-prose-captions': '#9ca3af',
            '--tw-prose-code': '#f9fafb',
            '--tw-prose-pre-code': '#d1d5db',
            '--tw-prose-pre-bg': '#1f2937',
            '--tw-prose-th-borders': '#4b5563',
            '--tw-prose-td-borders': '#374151',
          },
        },
      },
      // Animation and transition customization from theme config
      transitionDuration: {
        'theme': themeConfig.theme.transitionDuration + 'ms',
        '250': '250ms',
        '350': '350ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-down': 'slideDown 0.2s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}