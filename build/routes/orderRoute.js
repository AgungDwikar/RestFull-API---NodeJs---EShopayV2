"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _indexController = _interopRequireDefault(require("../controller/indexController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post("/createOrder", _indexController.default.cartCtrl.summaryCart, _indexController.default.orderCtrl.getOrderNumber, _indexController.default.orderCtrl.createOrder, _indexController.default.orderCtrl.updateStock, _indexController.default.cartCtrl.updateLineItemOrder, _indexController.default.cartCtrl.updateCartOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=orderRoute.js.map