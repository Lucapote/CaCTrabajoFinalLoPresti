import express from "express";
import controller from "../controllers/shopControllers.js";

const router = express.Router();

router.get("/", controller.shop)
router.get("/item/:id", controller.shopItem)
router.get("/cart", controller.shopCart)

export default router;