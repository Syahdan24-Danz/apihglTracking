const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./src/routes/userRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
