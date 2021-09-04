const morgan = require("morgan");

module.exports = () => {
  return morgan("dev");
};
