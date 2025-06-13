module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        warning: 'var(--color-warning)',
        surface: 'var(--color-surface)',
        neutral: {
          100: '#f5f5f5',
          900: '#1a1a1a'
        }
      }
    }
  },
  plugins: []
};
