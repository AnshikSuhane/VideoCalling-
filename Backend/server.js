import express from "express";
import { ENV } from "./lib/env.js";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

const __dirname = path.resolve();

app.get("/", (req, res) => {
  console.log("This is my first Testing API");
  res.status(200).json({ success: true, message: "API is working" });
});

app.get("/books", (req, res) => {
  console.log("This is my first Booking site");
  res.status(200).json({ success: true, message: "API is working" });
});

if (ENV.ENV_NODE === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log("Server is running on PORT:", ENV.PORT);
});
