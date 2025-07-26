/**
 * Main JavaScript file for Oinam Jekyll Tailwind Template
 * This file contains core functionality and will be compressed/uglified during build
 */

// Simple utility functions
const Utils = {
  // DOM ready function
  ready(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  },

  // Simple element selector
  $(selector) {
    return document.querySelector(selector);
  },

  // Multiple element selector
  $$(selector) {
    return document.querySelectorAll(selector);
  },

  // Add class to element
  addClass(element, className) {
    if (element) {
      element.classList.add(className);
    }
  },

  // Remove class from element
  removeClass(element, className) {
    if (element) {
      element.classList.remove(className);
    }
  },

  // Toggle class on element
  toggleClass(element, className) {
    if (element) {
      element.classList.toggle(className);
    }
  }
};

// Mobile menu functionality
const MobileMenu = {
  init() {
    const menuButton = Utils.$('[data-mobile-menu-button]');
    const mobileMenu = Utils.$('[data-mobile-menu]');

    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        Utils.toggleClass(mobileMenu, 'hidden');
        Utils.toggleClass(menuButton, 'active');
      });
    }
  }
};

// Smooth scroll functionality
const SmoothScroll = {
  init() {
    const links = Utils.$$('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        const targetElement = Utils.$(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
};

// Theme toggle functionality
const ThemeToggle = {
  init() {
    // Set initial theme based on system preference or saved preference
    this.setInitialTheme();

    const toggleButton = Utils.$('[data-theme-toggle]');

    if (toggleButton) {
      // Update button icon based on current theme
      this.updateToggleButton(toggleButton);

      toggleButton.addEventListener('click', () => {
        this.toggleTheme();
        this.updateToggleButton(toggleButton);
      });
    }
  },

  setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let theme;
    if (savedTheme) {
      theme = savedTheme;
    } else {
      theme = systemPrefersDark ? 'dark' : 'light';
    }

    this.applyTheme(theme);
  },

  toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';

    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  },

  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  updateToggleButton(button) {
    const isDark = document.documentElement.classList.contains('dark');
    const sunIcon = button.querySelector('[data-theme-icon="sun"]');
    const moonIcon = button.querySelector('[data-theme-icon="moon"]');

    if (sunIcon && moonIcon) {
      if (isDark) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    }
  }
};

// Initialize everything when DOM is ready
Utils.ready(() => {
  console.log('🚀 Oinam Jekyll Tailwind Template initialized');

  // Initialize components
  MobileMenu.init();
  SmoothScroll.init();
  ThemeToggle.init();

  // Add any additional initialization here
  console.log('✅ All components initialized successfully');
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Utils, MobileMenu, SmoothScroll, ThemeToggle };
}