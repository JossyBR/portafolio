const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'cel': '320px'
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
    },
  },
  plugins: [],
});
