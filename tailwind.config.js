/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1730',
        panel: '#13213d',
        line: 'rgba(148, 163, 184, 0.18)',
        cyan: '#63d8ff',
        blue: '#5c8dff',
        mint: '#7ef0c2',
        coral: '#ff7e6b',
      },
      boxShadow: {
        glow: '0 0 50px rgba(99, 216, 255, 0.18)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(99,216,255,0.28), transparent 30%), radial-gradient(circle at 78% 18%, rgba(92,141,255,0.20), transparent 24%), radial-gradient(circle at 50% 100%, rgba(126,240,194,0.10), transparent 24%), linear-gradient(180deg, rgba(11,23,48,0.92), rgba(10,21,42,0.98))',
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
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -8px, 0)' },
        },
        slowZoom: {
          '0%, 100%': { transform: 'scale(1.04)' },
          '50%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        'slow-zoom': 'slowZoom 24s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
