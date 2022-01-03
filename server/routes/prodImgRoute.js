import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router();

router.get("/:id", indexController.productImgCtrl.findProdImagesById)
router.get("/", indexController.productImgCtrl.findAll )

export default router;