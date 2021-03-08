const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

const routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(routes);
app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://cihat:i6yJPHJvIVYwWOHB@cluster1.iq58a.mongodb.net/test?authSource=admin`
  )
  .then((result) => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
