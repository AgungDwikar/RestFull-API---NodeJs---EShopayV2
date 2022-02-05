import { Router } from "express";
import indexController from "../controller/indexController";
import UpDownloadHelper from "../middleware/UpDownloadHelper";

const router = Router();

// mendaptkan semua data product
router.get("/", indexController.prodCtrl.findAllRows)
router.get("/images/:filename", UpDownloadHelper.showProductImage);
// create single file data product
router.post("/", UpDownloadHelper.uploadSingleFile, indexController.prodCtrl.createProduct)
// apload multiple image
router.post("/multiple", UpDownloadHelper.uploadMultipleFile, indexController.productImgCtrl.createProductImage)
// update data product
router.put("/:id",UpDownloadHelper.uploadSingleFile, indexController.prodCtrl.updateProduct);
// delete
router.delete("/:id", indexController.prodCtrl.deleteRow)


export default router