import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router();

router.get("/", indexController.categoryCtrl.findAll)
router.get("/rawsql", indexController.categoryCtrl.findCategoryBySQL);
router.get("/:id", indexController.categoryCtrl.findOne)
router.get("/find/:id", indexController.categoryCtrl.findRowById)

export default router