require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connectDB = require("./db");
const Class = require("./models/Class");
const classRoutes = require("./routes/classRoutes");
const authRoutes = require("./routes/authRoutes");

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));



app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/register", async (req, res) => {
  try {
    const classes = await Class.find();
    res.json({ classes: classes });
  } catch (error) {
    console.error("Error fetching classes:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.use("/class", classRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
