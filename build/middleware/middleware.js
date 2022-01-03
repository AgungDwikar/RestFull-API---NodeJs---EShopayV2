"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const handleError = (err, req, res, next) => {
  console.error(err);
  if (res.headersSent) return next(err);
  const statusCode = err.statusCode || 500;
  const errorMessage = STATUS_CODES[statusCode] || 'Internal Error';
  res.status(statusCode).json({
    error: errorMessage
  });
};

const notFound = (req, res) => {
  res.status(404).json({
    error: 'Not Found, please ceck youre code'
  });
};

var _default = {
  handleError,
  notFound
};
exports.default = _default;
//# sourceMappingURL=middleware.js.map