// tailwind.config.js
const catppuccin = require('@catppuccin/tailwindcss');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',     // <- scan everything in src
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ─── Colours ────────────────────────────────────────────
      colors: {
        /* HSL helpers let us keep /opacity utilities working */
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground)/<alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        /* stone‑ & red‑ scales so you can still do bg-stone-700 etc. */
        stone: {
          50: 'var(--color-stone-50)',
          100: 'var(--color-stone-100)',
          200: 'var(--color-stone-200)',
          300: 'var(--color-stone-300)',
          400: 'var(--color-stone-400)',
          500: 'var(--color-stone-500)',
          600: 'var(--color-stone-600)',
          700: 'var(--color-stone-700)',
          800: 'var(--color-stone-800)',
          900: 'var(--color-stone-900)',
          950: 'var(--color-stone-950)',
        },
        red: {
          50: 'var(--color-red-50)',
          100: 'var(--color-red-100)',
          200: 'var(--color-red-200)',
          300: 'var(--color-red-300)',
          400: 'var(--color-red-400)',
          500: 'var(--color-red-500)',
          600: 'var(--color-red-600)',
          700: 'var(--color-red-700)',
          800: 'var(--color-red-800)',
          900: 'var(--color-red-900)',
          950: 'var(--color-red-950)',
        },
      },

      // ─── Border‑radius token ────────────────────────────────
      borderRadius: {
        lg: 'var(--radius)',          // use rounded-lg
      },

      // ─── Keyframes & Animations ─────────────────────────────
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(239,68,68,0.4)' },
          '70%':      { boxShadow: '0 0 0 10px rgba(239,68,68,0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .4s ease-out both',
        pulse:  'pulse 2s infinite',
      },

      // ─── Container padding (replaces your .container) ──────
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },

  // Tailwind plugins (animate.css replacement & prose if ever needed)
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@catppuccin/tailwindcss')({
      // Catppuccin theme configuration
      preset: 'ctp',
      defaultFlavour: 'macchiato',
    }),
  ],
};
