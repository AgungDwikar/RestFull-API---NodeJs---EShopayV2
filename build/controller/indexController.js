"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _categoryController = _interopRequireDefault(require("./categoryController"));

var _productImageController = _interopRequireDefault(require("./productImageController"));

var _productController = _interopRequireDefault(require("./productController"));

var _userController = _interopRequireDefault(require("./userController"));

var _cartController = _interopRequireDefault(require("./cartController"));

var _orderController = _interopRequireDefault(require("./orderController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  categoryCtrl: _categoryController.default,
  productImgCtrl: _productImageController.default,
  prodCtrl: _productController.default,
  userCtrl: _userController.default,
  cartCtrl: _cartController.default,
  orderCtrl: _orderController.default
};
exports.default = _default;
//# sourceMappingURL=indexController.js.map