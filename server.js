const express = require("express");
const bodyParser = require("body-parser");
const users = require("./api/alumnado");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/alumnado", users);

app.listen(8000, () => console.log("Sercidor en localhost:8000"));