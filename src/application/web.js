import express from "express";
import { publicRouter } from "../route/public-router.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRouter } from "../route/router.js";

export const web = express();

web.use(express.json());
web.use(publicRouter);
web.use(userRouter);
web.use(errorMiddleware);