import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        bg: 'var(--bg)',
        box: 'var(--box)',
        'box-2': 'var(--box-2)',
        line: 'var(--line)',
        'ink-3': 'var(--ink-3)',
        'ink-2': 'var(--ink-2)',
        'ink-1': 'var(--ink-1)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
