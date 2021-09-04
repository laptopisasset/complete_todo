const express = require("express");

const routes = require("./src/routes");

const { logs } = require("./src/middleware");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(logs());
routes(app);

app.use((err, req, res, next) => {
  res.send(err.code || 500).json({ errror: { message: err.message } });
  next();
});

app.listen(PORT, () => console.log(`Listenting on port ${PORT}`));
