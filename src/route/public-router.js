import express from "express";
import userController from "../controller/user-controller.js";
import feedbackController from "../controller/feedback-controller.js";
import kategoriController from "../controller/kategori-controller.js";
import subkategoriController from "../controller/subkategori-controller.js";
import kataController from "../controller/kata-controller.js";

const publicRouter = express.Router();

publicRouter.post("/api/users", userController.register);
publicRouter.post("/api/users/login", userController.login);

publicRouter.get("/api/feedback", feedbackController.get);

publicRouter.post("/api/kategori", kategoriController.create);
publicRouter.get("/api/kategori", kategoriController.get);
publicRouter.get("/api/kategori/:id", kategoriController.getById);

publicRouter.post("/api/subkategori", subkategoriController.create);
publicRouter.get("/api/subkategori", subkategoriController.get);
publicRouter.get("/api/subkategori/:id", subkategoriController.getById);

publicRouter.post("/api/kata", kataController.create);
publicRouter.delete("/api/kata/:id", kataController.deleteById);
publicRouter.get("/api/kata/", kataController.get);
publicRouter.get("/api/kata/:id", kataController.getById);

export { publicRouter };
