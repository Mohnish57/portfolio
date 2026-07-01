/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ─────────────────────────────────────────────
      //  NEWSPRINT — high-contrast editorial print.
      //  Warm cream paper, ink black, one red accent.
      // ─────────────────────────────────────────────
      colors: {
        background: '#FFFFFF', // clean white paper
        foreground: '#111111', // ink black
        paper: '#FFFFFF',
        cream: '#FFFFFF',
        sand: '#FFFFFF', // white (structure comes from borders, not fills)
        ink: '#111111',
        accent: {
          DEFAULT: '#CC0000', // editorial red
          dark: '#A30000',
        },
        muted: {
          DEFAULT: '#E7E7E3', // light divider grey
          foreground: '#525252',
        },
        border: '#111111', // ink black — the structural element
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
      boxShadow: {
        news: '4px 4px 0px 0px #111111',
        'news-lg': '8px 8px 0px 0px #111111',
        'news-red': '4px 4px 0px 0px #CC0000',
      },
    },
  },
  plugins: [],
}
