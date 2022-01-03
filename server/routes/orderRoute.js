import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router();

router.post("/createOrder",
    indexController.cartCtrl.summaryCart,
    indexController.orderCtrl.getOrderNumber,
    indexController.orderCtrl.createOrder,
    indexController.orderCtrl.updateStock,
    indexController.cartCtrl.updateLineItemOrder,
    indexController.cartCtrl.updateCartOrder);

export default router