const { Router } = require("express");

const router = Router();

// router.post("/signin", user.signIn);

/**
 * @param {Express} app
 */
module.exports = (app) => {
  app.use("/api", router);
};
