import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { version } from "../package.json";
import { router } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send({
    version: version,
    msg: "Hello World!",
  });
});

app.use("/auth", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
