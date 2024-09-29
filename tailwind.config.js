/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customHsl: {
          warning: 'hsl(4 66% 63%)',
          bkg: 'hsl(190 60% 98%)',
          text: 'hsl(185 26% 9%)',
          muted: 'hsl(183 8% 55%)',
          accent: 'hsl(183 74% 44%)',
          warning_opacity: 'hsl(4 66% 63% /.1)',
          blue_opacity: 'hsl(183 74% 44% / .04)',
          accent_opacity: 'hsl(183 74% 44% / .04)',
          amber_opacity: 'hsl(26 90.5% 37.1% / 0.04)'
        }
      }
    },
  },
  plugins: [],
}

