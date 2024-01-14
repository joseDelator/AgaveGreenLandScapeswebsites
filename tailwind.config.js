/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["emerald"],
        primary: "#75d481",
        secondary: "#00c4cc",
        neutral: "#32620e",
        accent:"#ffa629",
      },
    }, ],
  },
  theme: {
    extend: {},
  },
}
