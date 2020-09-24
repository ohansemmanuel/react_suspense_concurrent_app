// styleguide.config.js
const path = require("path");

module.exports = {
  components: "src/components/**/[A-Z]*.jsx",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/WithChakraUI.js"),
  },
};
