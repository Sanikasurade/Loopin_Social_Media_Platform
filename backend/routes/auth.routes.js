
import express from "express"
import { signIn, signOut, signUp } from "../controllers/auth.controllers.js"

const authRouter=express.Router()
authRouter.post("/signup",signUp)//using post method because we are taking something from req.body
authRouter.get("/signin",signIn)
authRouter.get("/signout", signOut); 


export default authRouter