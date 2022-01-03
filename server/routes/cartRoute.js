import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router();

router.post("/addToCart", indexController.cartCtrl.isCartOpen,
indexController.cartCtrl.saveLineItem)

router.post("/checkout",
    indexController.cartCtrl.checkout,
    indexController.cartCtrl.updateCart
    )

export default router