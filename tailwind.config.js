/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151320",
        accent: "#AB8EFF",
        light: {
          100: "#D6C6FF",
          200: "#A8b5db",
          300: "#9ca4ab",
        },
        dark: {
          100: "#221f3d",
          200: "#1a172f",
          300: "#121022",
        }
      },
      fontFamily: {
        "outfit-regular": ["Outfit-Regular"],
        "outfit-medium": ["Outfit-Medium"],
        "outfit-semibold": ["Outfit-SemiBold"],
        "outfit-bold": ["Outfit-Bold"],
      },
    },
  },
  plugins: [],
}