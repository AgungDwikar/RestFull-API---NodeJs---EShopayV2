"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _categoryRoute = _interopRequireDefault(require("./categoryRoute"));

var _prodImgRoute = _interopRequireDefault(require("./prodImgRoute"));

var _productRoute = _interopRequireDefault(require("./productRoute"));

var _userRoute = _interopRequireDefault(require("./userRoute"));

var _cartRoute = _interopRequireDefault(require("./cartRoute"));

var _orderRoute = _interopRequireDefault(require("./orderRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  categoryRoute: _categoryRoute.default,
  prodImgRoute: _prodImgRoute.default,
  productRoute: _productRoute.default,
  userRoute: _userRoute.default,
  cartRoute: _cartRoute.default,
  orderRoute: _orderRoute.default
};
exports.default = _default;
//# sourceMappingURL=indexRoute.js.map