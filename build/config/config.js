"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const config = {
  env: process.env.NODE_ENV || 'DEVELOPMENT',
  port: process.env.PORT || 4001,
  jwtSecret: process.env.JWT_SECRET || "youre secret key",
  db_name: "eshopeyy",
  db_username: "postgres",
  db_password: "ganbatte",
  URL_DOMAIN: "/eshopay",
  URL_IMAGE: 'http://localhost:4001/eshopay/api/product/images/',
  URL_API: '/eshopay/api',
  UPLOAD_DIR: '/storages'
};
var _default = config;
exports.default = _default;
//# sourceMappingURL=config.js.map