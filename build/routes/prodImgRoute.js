"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _indexController = _interopRequireDefault(require("../controller/indexController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get("/:id", _indexController.default.productImgCtrl.findProdImagesById);
router.get("/", _indexController.default.productImgCtrl.findAll);
var _default = router;
exports.default = _default;
//# sourceMappingURL=prodImgRoute.js.map