const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");

const router = require("./routes/router");

const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected..."))
  .catch((err) => console.log(err));
  
  app.use("/api", router)

app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`)});
// Qj1E4vavEnOPZCgy
