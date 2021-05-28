import express from "express";
import { remove } from "../controllers/userController";
import { edit } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
