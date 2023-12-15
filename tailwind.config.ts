/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins:[require("daisyui")],
  daisyui: {
    themes: [ "nord"],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkMode: false,
    prefix: "",
  },
}
