"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _indexController = _interopRequireDefault(require("../controller/indexController"));

var _UpDownloadHelper = _interopRequireDefault(require("../middleware/UpDownloadHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // mendaptkan semua data product

router.get("/", _indexController.default.prodCtrl.findAll); // create single file data product

router.post("/", _UpDownloadHelper.default.uploadSingleFile, _indexController.default.prodCtrl.createProduct); // apload multiple image

router.post("/multiple", _UpDownloadHelper.default.uploadMultipleFile, _indexController.default.productImgCtrl.createProductImage); // update data product

router.put("/:id", _UpDownloadHelper.default.uploadSingleFile, _indexController.default.prodCtrl.updateProduct);
var _default = router;
exports.default = _default;
//# sourceMappingURL=productRoute.js.map