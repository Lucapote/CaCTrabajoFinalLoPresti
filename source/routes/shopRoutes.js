import express from "express";
import controller from "../controllers/shopControllers.js";

const router = express.Router();

router.get("/", controller.shop)
router.get("/item/:id", controller.shopItem)

export default router;