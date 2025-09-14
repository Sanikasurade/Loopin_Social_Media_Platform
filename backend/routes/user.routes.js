import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { getCurrentUser } from "../controllers/user.controllers.js";
import {suggestedUsers} from "../controllers/user.controllers.js"

const userRouter = express.Router();
userRouter.get("/current",isAuth,getCurrentUser)//fetching the current loginuser by get method
userRouter.get("/suggested",isAuth,suggestedUsers)


export default userRouter;
