import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router();

router.get("/", indexController.categoryCtrl.findAll);
router.get("/rawsql", indexController.categoryCtrl.findCategoryBySQL);
// router.get("/find/:id", indexController.categoryCtrl.findOne);
router.get("/:id", indexController.categoryCtrl.findRowById);

// method post
router.post("/", indexController.categoryCtrl.createRow);
// put
router.put("/:id",indexController.categoryCtrl.updateRow);
// delete
router.delete("/:id",indexController.categoryCtrl.deleteRow);

export default router;
