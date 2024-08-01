const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const groupRoutes = require("./src/routes/Group");
app.use(bodyParser.json());
app.use(groupRoutes);

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.listen(process.env.port, () => {
  mongoose
    .connect(process.env.mongodbUrl)
    .then(() => {
      console.log("App is running at port no 4000");
    })
    .catch((error) => {
      console.log(error);
    });
});
