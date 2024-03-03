import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js"
import {errorMiddleware} from "./error/error.js"
import reservationRouter from "./routes/reservationRoutes.js"


const app=express();
dotenv.config({path:"./config/config.env"});
const corsOptions = {                //frontend connect to backend
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
  dbConnection();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/v1/reservation",reservationRouter);

  app.get("/", (req, res, next)=>{return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  })})

  app.use(errorMiddleware);

export default app;