const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({

  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // ...
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
});