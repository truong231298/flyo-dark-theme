/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //  (intro and email sign up background)
        'DarkBlue1': 'hsl(217, 28%, 15%)',
        // (main background)
        'DarkBlue2': 'hsl(218, 28%, 13%)',
        // (footer background)
        'DarkBlue3': 'hsl(216, 53%, 9%)',
        // (testimonials background)
        'DarkBlue4': 'hsl(219, 30%, 18%)',
        //  (inside call-to-action gradient)
        'Cyan': 'hsl(176, 68%, 64%)',
        //  (inside call-to-action gradient)
        'Blue': 'hsl(198, 60%, 50%)',
        //  (error)
        'Light Red': 'hsl(0, 100%, 63%)',

      },
      backgroundImage:{
        "bg-desktop": "url('/images/bg-curvy-desktop.svg')",
        "bg-mobile": "url('/images/bg-curvy-mobile.svg')",
        "bg-quotes": "url('/images/bg-quotes.png')"
      }
    },
  },
  plugins: [],
}