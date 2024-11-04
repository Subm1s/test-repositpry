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
      "http://client.api.localhost:3000",
      "http://localhost:5173",
      "https://4nxxvf8x-5173.euw.devtunnels.ms",
      "https://4nxxvf8x-3000.euw.devtunnels.ms",
      "https://dev.onemarket.in.ua",
      "https://admin.onemarket.in.ua",
      "https://dev-test.onemarket.in.ua",
      "https://dev-test.onemarket.in.ua",
      "https://admin-test.onemarket.in.ua",
      "https://bbrdq16w-3000.euw.devtunnels.ms",
      "https://bbrdq16w-3001.euw.devtunnels.ms",
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
