import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { getCurrentUser } from "../controllers/user.controllers.js";

const userRouter = express.Router();
userRouter.get("/current",isAuth,getCurrentUser)//fetching the current loginuser by get method


export default userRouter;
