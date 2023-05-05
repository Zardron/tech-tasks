require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbCon");
const employeeRoutes = require("./routes/employeeRoutes");

const PORT = process.env.PORT;
const app = express();
connectDB();

app.use(express.json());

app.use("/employee", employeeRoutes);

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
  app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
  });
});
