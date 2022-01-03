"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _compression = _interopRequireDefault(require("compression"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _initModels = _interopRequireWildcard(require("./models/init-models"));

var _indexRoute = _interopRequireDefault(require("./routes/indexRoute"));

var _middleware = _interopRequireDefault(require("./middleware/middleware"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || 3007;
const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use((0, _cookieParser.default)());
app.use((0, _helmet.default)());
app.use((0, _compression.default)());
app.use((0, _cors.default)());
app.use(async (req, res, next) => {
  req.context = {
    models: _initModels.default
  };
  next();
});
app.use(process.env.URL_API + "/category", _indexRoute.default.categoryRoute);
app.use(process.env.URL_API + "/productImg", _indexRoute.default.prodImgRoute);
app.use(process.env.URL_API + "/product", _indexRoute.default.productRoute);
app.use(process.env.URL_API + "/user", _indexRoute.default.userRoute);
app.use(process.env.URL_API + "/cart", _indexRoute.default.cartRoute);
app.use(process.env.URL_API + "/order", _indexRoute.default.orderRoute);
app.use(_middleware.default.handleError);
app.use(_middleware.default.notFound);
const dropDatabaseSync = false;

_initModels.sequelize.sync({
  force: dropDatabaseSync
}).then(async () => {
  if (dropDatabaseSync) {
    console.log("database do not drop");
  }

  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
});

var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map