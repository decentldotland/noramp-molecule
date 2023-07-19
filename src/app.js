import { getApp } from "./utils/noramp.js";
import express from "express";
import cors from "cors";


const app = express();

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/payments", async (req, res) => {
  try {
  	const response = await getApp();
  	res.send(response)
    res.end();
    return;
  } catch (error) {
    console.log(error);
    res.end();
  }
});

app.listen(port, async () => {
  console.log(`listening at PORT: ${port}`);
});
