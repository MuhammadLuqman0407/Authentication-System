/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
      },
      backdropBlur: {
        glass: 'var(--glass-blur)'
      },
      backgroundColor: {
        glass: 'var(--glass-bg)'
      },
      borderRadius: {
        glass: 'var(--border-radius)'
      }
    }
  },
  plugins: []
};
