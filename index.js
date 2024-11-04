const express = require("express");
const cors = require("cors");
require("dotenv").config;

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [
      "*",
      "http://localhost:3000",
      "https://01t6f4hp-3000.euw.devtunnels.ms",
    ],
  })
);

app.get("/", (req, res, next) => {
  res.status(200).json("Hello world!!!");
});
async function startApp() {
  try {
    app.listen(PORT, () => console.log(`SERVER STARTED on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
