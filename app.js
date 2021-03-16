const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DEFAULT_DATABASE,
  PORT,
} = require("./config");

const errorController = require("./controllers/error");

const app = express();
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster1.iq58a.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;

app.set("view engine", "ejs");
app.set("views", "views");

const routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, seUnifiedTopology: true })
  .then((result) => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));
