// styleguide.config.js
const path = require("path");

module.exports = {
  components: "src/components/**/*.{js,jsx,ts,tsx}",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/WithChakraUI.js"),
  },
};
