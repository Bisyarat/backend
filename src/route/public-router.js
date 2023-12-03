import express from "express";
import userController from "../controller/user-controller.js";
import feedbackController from "../controller/feedback-controller.js";

const publicRouter = express.Router();

publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);
publicRouter.get('/api/feedback' , feedbackController.get)

export{
    publicRouter
}