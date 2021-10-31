const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);

//db connection

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 4000; //backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
