/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          primary: "#FF660E",
          secondaryOne: "#333333",
          secondaryTwo: "#000000",
          baseOne: "#FFEDE2",
          baseTwo: "#F9F9F9",
          baseThree: "#FFFFFF"
        }
      },
    },
    plugins: [],
}