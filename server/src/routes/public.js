const { Router } = require("express");

const { user } = require("../controllers");

const router = Router();

router.post("/signin", user.signIn);

/**
 * @param {Express} app
 */
module.exports = (app) => {
  app.use("/", router);
};
