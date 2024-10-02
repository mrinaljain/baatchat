module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orry: "#ea7070",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
