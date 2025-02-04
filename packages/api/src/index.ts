import express from "express";
import { greet } from "@myorg/lib";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: greet("World") });
  });

  app.listen(3000, () => {
    console.log("API running on http://localhost:3000");
    });
