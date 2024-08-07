const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});