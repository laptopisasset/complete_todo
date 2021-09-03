const express = require("express");

const routes = require("./src/routes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

routes(app);

app.listen(PORT, () => console.log(`Listenting on port ${PORT}`));
