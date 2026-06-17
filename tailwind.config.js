/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Playful Geometric tokens
        cream: '#FFFDF5', // warm paper background
        paper: '#FFFFFF',
        ink: '#1E293B', // slate-800 foreground (softer than black)
        accent: '#8B5CF6', // vivid violet (primary brand)
        pop: {
          pink: '#F472B6', // playful secondary
          amber: '#FBBF24', // optimism / tertiary
          mint: '#34D399', // freshness / quaternary
          sky: '#38BDF8', // extra confetti color
        },
        // Newsprint variant tokens
        news: {
          bg: '#FFFFFF', // page background (white)
          ink: '#111111', // ink black
          muted: '#E5E5E0', // divider grey
          red: '#CC0000', // editorial red
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        // Newsprint families
        serif: ['"Playfair Display"', '"Times New Roman"', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        ui: ['Inter', '"Helvetica Neue"', 'sans-serif'],
        typewriter: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      borderWidth: {
        DEFAULT: '2px',
        3: '3px',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      boxShadow: {
        // Hard offset "pop" shadows, no blur
        pop: '4px 4px 0px 0px #1E293B',
        'pop-sm': '2px 2px 0px 0px #1E293B',
        'pop-md': '6px 6px 0px 0px #1E293B',
        'pop-lg': '8px 8px 0px 0px #1E293B',
        'pop-xl': '12px 12px 0px 0px #1E293B',
        'pop-pink': '8px 8px 0px 0px #F472B6',
        'pop-amber': '6px 6px 0px 0px #FBBF24',
        'pop-mint': '8px 8px 0px 0px #34D399',
        'pop-accent': '6px 6px 0px 0px #8B5CF6',
        // Newsprint hard offset shadows
        news: '4px 4px 0px 0px #111111',
        'news-lg': '8px 8px 0px 0px #111111',
        'news-red': '4px 4px 0px 0px #CC0000',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        floatRotate: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(8deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(-3deg)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 6s ease-in-out infinite',
        floatRotate: 'floatRotate 9s ease-in-out infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        spinSlow: 'spinSlow 26s linear infinite',
        blink: 'blink 1.4s ease-in-out infinite',
      },
      transitionTimingFunction: {
        // bouncy overshoot for the "pop" feel
        bounce2: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
