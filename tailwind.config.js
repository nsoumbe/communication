/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        panel: '#0d1a2d',
        line: 'rgba(148, 163, 184, 0.18)',
        cyan: '#4bd6ff',
        blue: '#3b82f6',
        mint: '#7ef0c2',
        coral: '#ff7e6b',
      },
      boxShadow: {
        glow: '0 0 40px rgba(75, 214, 255, 0.15)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(75,214,255,0.20), transparent 28%), radial-gradient(circle at 80% 20%, rgba(126,240,194,0.12), transparent 22%), linear-gradient(180deg, rgba(7,17,31,0.96), rgba(7,17,31,1))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
