import { Router } from "express";

export const authRouter = Router();

authRouter.get("/", (req, res) => {
  res.send({
    msg: "This is the auth router",
  });
});
