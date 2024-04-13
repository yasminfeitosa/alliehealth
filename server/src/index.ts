import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import process from "process";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) =>
  router(req, res, next)
);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
