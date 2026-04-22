/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F2E8',
        creamDark: '#EDE6D6',
        ink: '#1C1917',
        inkSecondary: '#57534E',
        inkMuted: '#A8A29E',
        blue: '#2563EB',
        blueLight: '#DBEAFE',
        bluePale: '#EFF6FF',
        red: '#DC2626',
        redLight: '#FEE2E2',
        redPale: '#FEF2F2',
        sepia: '#92400E',
        sepiaLight: '#FDE68A',
        sepiaPale: '#FEF3C7',
        border: '#D6D0C4',
        borderLight: '#E7E2D6',
        paperWhite: '#FEFDFB',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 5.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2.25rem, 4.5vw, 3.4rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'h2': ['clamp(1.65rem, 3.2vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.3rem, 2.1vw, 1.7rem)', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'h4': ['1.15rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7', letterSpacing: '0.005em' }],
        'body': ['1.125rem', { lineHeight: '1.75', letterSpacing: '0.005em' }],
        'body-sm': ['1rem', { lineHeight: '1.65', letterSpacing: '0.01em' }],
        'caption': ['0.875rem', { lineHeight: '1.55', letterSpacing: '0.02em' }],
        'ui': ['0.9375rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'mono-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card-hover': '0 8px 24px rgba(28, 25, 23, 0.08)',
        'nav-scroll': '0 1px 8px rgba(0, 0, 0, 0.06)',
        'tooltip-blue': '0 4px 16px rgba(37, 99, 235, 0.12)',
        'tooltip-red': '0 4px 16px rgba(220, 38, 38, 0.12)',
      },
      maxWidth: {
        'content': '1200px',
        'prose': '800px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      zIndex: {
        'tooltip': '100',
        'mobile-menu': '200',
        'toast': '300',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
