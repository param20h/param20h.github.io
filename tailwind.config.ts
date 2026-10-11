import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#e0e5ec',
          light: '#ffffff',
          dark: '#a3b1c6',
          text: '#4a5568',
        },
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00d4ff',
          600: '#00a3cc',
          700: '#007a99',
          800: '#005166',
          900: '#002933',
        },
        accent: {
          50: '#ffe6ed',
          100: '#ffccd7',
          200: '#ff99af',
          300: '#ff6687',
          400: '#ff335f',
          500: '#ff6b6b',
          600: '#cc3636',
          700: '#992929',
          800: '#661b1b',
          900: '#330e0e',
        },
      },
      boxShadow: {
        'neo-out': '12px 12px 24px rgba(163, 177, 198, 0.55), -12px -12px 24px rgba(255, 255, 255, 0.95)',
        'neo-sm': '5px 5px 12px rgba(163, 177, 198, 0.5), -5px -5px 12px rgba(255, 255, 255, 0.95)',
        'neo-in': 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.95)',
        'neo-in-sm': 'inset 2px 2px 5px rgba(163, 177, 198, 0.6), inset -2px -2px 5px rgba(255, 255, 255, 0.95)',
        'neo-hover': '16px 16px 32px rgba(163, 177, 198, 0.65), -16px -16px 32px rgba(255, 255, 255, 1)',
        'neo-dark': '6px 6px 14px rgba(163, 177, 198, 0.6), -4px -4px 10px rgba(255, 255, 255, 0.85)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #00d4ff 0%, #ff6b6b 100%)',
        'gradient-neo': 'linear-gradient(145deg, #ffffff, #e0e5ec)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
