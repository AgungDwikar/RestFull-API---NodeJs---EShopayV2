"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _indexController = _interopRequireDefault(require("../controller/indexController"));

var _authJWT = _interopRequireDefault(require("../middleware/authJWT"));

var _UpDownloadHelper = _interopRequireDefault(require("../middleware/UpDownloadHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get("/", _indexController.default.userCtrl.findAll);
router.get("/:id", _indexController.default.userCtrl.findOne);
router.post("/login", _authJWT.default.authenticate, _authJWT.default.login);
router.post("/signup", _indexController.default.userCtrl.signup);
var _default = router;
exports.default = _default;
//# sourceMappingURL=userRoute.js.map