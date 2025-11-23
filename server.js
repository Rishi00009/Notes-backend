const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const noteRoutes = require("./routes/noteRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Markdown Notes API is running");
});

// db connect + start server

const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI loaded:", !!MONGO_URI);
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });
