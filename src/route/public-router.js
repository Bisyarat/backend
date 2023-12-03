import express from "express";
import userController from "../controller/user-controller.js";
import feedbackController from "../controller/feedback-controller.js";
import kategoriController from "../controller/kategori-controller.js";

const publicRouter = express.Router();

publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);
publicRouter.get('/api/feedback' , feedbackController.get)
publicRouter.post('/api/kategori' , kategoriController.create)
publicRouter.get('/api/kategori' , kategoriController.get)
export{
    publicRouter
}