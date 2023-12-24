const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
// app.use(bodyParser.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
const router = require("./routes/routes");
app.use("/api", router);
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// database connection
const connectDb = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
connectDb().then((r) => console.log("Connected to Database"));
app.listen(PORT);
