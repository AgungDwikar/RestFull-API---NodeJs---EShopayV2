"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _indexController = _interopRequireDefault(require("../controller/indexController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post("/addToCart", _indexController.default.cartCtrl.isCartOpen, _indexController.default.cartCtrl.saveLineItem);
router.post("/checkout", _indexController.default.cartCtrl.checkout, _indexController.default.cartCtrl.updateCart);
var _default = router;
exports.default = _default;
//# sourceMappingURL=cartRoute.js.map