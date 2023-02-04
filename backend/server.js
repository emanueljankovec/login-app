require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");
const logedIn = require("./routes/logedIn");

// database connection
connection();

// middleweares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/me", logedIn);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
