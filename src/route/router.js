import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import feedbackController from "../controller/feedback-controller.js";
import riwayatController from "../controller/riwayat-controller.js";

const userRouter = express.Router();
userRouter.use(authMiddleware);
userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);

userRouter.post("/api/feedback", feedbackController.create);

userRouter.post("/api/riwayat", riwayatController.create);
userRouter.patch("/api/riwayat/:id_kata", riwayatController.update);
userRouter.delete("/api/riwayat/:id_kata", riwayatController.deleteByIdKata);

export { userRouter };
