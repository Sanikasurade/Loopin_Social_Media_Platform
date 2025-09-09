import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", //frontend url
    withCredentials: true, //
  })
);
app.use(express.json()); //it will tell the routes that what ever data is coming from frontend is in json format so that we will not  get the error of undefined
app.use(cookieParser()); //

app.use("/api/auth", authRouter); //it will add the api/auth in front of all routes that we have created from authRouter
app.use("/api/user", userRouter);

app.listen(port, () => {
  connectDb();
  console.log("Server is started");
});
//PAkoQtwxDjvJy8La
