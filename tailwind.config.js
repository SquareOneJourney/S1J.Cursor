/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'heading': ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'banner': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'article-heading': ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'article-body': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        'brand-green': '#014421',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            lineHeight: '1.75',
            h1: {
              fontFamily: 'Playfair Display, ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
              color: '#111',
              fontSize: '3rem',
              fontWeight: '600',
              lineHeight: '1.2',
              marginTop: '0',
              marginBottom: '2rem',
            },
            h2: {
              fontFamily: 'Playfair Display, ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
              color: '#111',
              fontSize: '2rem',
              fontWeight: '500',
              lineHeight: '1.3',
              marginTop: '3rem',
              marginBottom: '1.5rem',
            },
            h3: {
              fontFamily: 'Playfair Display, ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
              color: '#111',
              fontSize: '1.5rem',
              fontWeight: '500',
              lineHeight: '1.4',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            p: {
              fontSize: '1.125rem',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            a: {
              color: '#2563eb',
              textDecoration: 'underline',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            blockquote: {
              fontStyle: 'italic',
              fontSize: '1.25rem',
              color: '#4b5563',
              borderLeft: '4px solid #e5e7eb',
              paddingLeft: '1.5rem',
              margin: '2rem 0',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};