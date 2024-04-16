import { Request, Response, Router } from "express";
import { db } from "./db";
import multer from "multer";
import os from "os";

const router = Router();

const upload = multer({ dest: os.tmpdir() });

router.get("/users", (req: Request, res: Response) => {
  const users = db.prepare("SELECT * FROM users").all();

  res.json({
    users: users,
  });
});

router.post("/users", (req: Request, res: Response) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.birthdate) {
    res.sendStatus(400);
    return;
  }

  const user = db
    .prepare(
      "INSERT INTO users (first_name, last_name, email, birthdate) VALUES (@firstName, @lastName, @email, @birthdate)"
    )
    .run({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      birthdate: req.body.birthdate,
    });

  res.json({
    id: user.lastInsertRowid,
  });
});

router.post(
  "/users/bulk",
  upload.single("file"),
  (req: Request, res: Response) => {
    const file = req.file;

    console.log(file);

    res.sendStatus(200);
  }
);

export default router;
