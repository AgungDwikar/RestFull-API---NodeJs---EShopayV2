"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _indexController = _interopRequireDefault(require("../controller/indexController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get("/", _indexController.default.categoryCtrl.findAll);
router.get("/rawsql", _indexController.default.categoryCtrl.findCategoryBySQL);
router.get("/:id", _indexController.default.categoryCtrl.findOne);
router.get("/find/:id", _indexController.default.categoryCtrl.findRowById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=categoryRoute.js.map