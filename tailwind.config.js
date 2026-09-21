/** @type {import('tailwindcss').Config} */

function oklchColor(l, c, h) {
  return ({ opacityValue }) =>
    opacityValue === undefined ? `oklch(${l} ${c} ${h})` : `oklch(${l} ${c} ${h} / ${opacityValue})`
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: oklchColor('42%', '.24', '262'),
        foreground: oklchColor('97%', '.03', '90'),
        cream: oklchColor('97%', '.03', '90'),
        ink: oklchColor('14%', '.02', '260'),
        accent: oklchColor('92%', '.22', '118'),
        card: oklchColor('36%', '.22', '262'),
        coral: oklchColor('66%', '.24', '25'),
        edge: oklchColor('97%', '.03', '90'),
      },
      fontFamily: {
        hand: ['Kalam', 'Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
