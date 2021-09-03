const PrivateRoutes = require("./private");
const PublicRoutes = require("./public");

/**
 * @param {Express} app
 */
module.exports = (app) => {
  PrivateRoutes(app);
  PublicRoutes(app);
};
