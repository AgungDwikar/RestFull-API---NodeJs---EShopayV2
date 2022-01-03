import { Router } from "express";
import indexController from "../controller/indexController";
import authJWT from "../middleware/authJWT";
import UpDownloadHelper from "../middleware/UpDownloadHelper";

const router = Router();

router.get("/", indexController.userCtrl.findAll);
router.get("/:id", indexController.userCtrl.findOne);
router.post("/login",authJWT.authenticate,authJWT.login);
router.post("/signup",indexController.userCtrl.signup);

export default router