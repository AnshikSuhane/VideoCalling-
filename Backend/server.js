import express from "express";
import { ENV } from "./lib/env.js";
import cors from "cors";


const app = express();
app.use(cors());

app.get("/", (req, res) => {
  console.log("This is my first Testing API");
  res.status(200).json({success:true,message:"API is working"});
});

app.listen(ENV.PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
