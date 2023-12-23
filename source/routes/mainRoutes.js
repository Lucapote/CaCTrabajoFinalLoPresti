import express from "express";
import controller from "../controllers/mainControllers.js";

const router = express.Router();

router.get("/", controller.home);
router.get("/contact", controller.contact);
router.get("/about", controller.about);
router.get("/faq", controller.faq);

export default router; 