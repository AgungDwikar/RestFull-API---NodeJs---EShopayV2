"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formidable = _interopRequireDefault(require("formidable"));

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const uploadDir = process.cwd() + '/storages/';

const uploadSingleFile = async (req, res, next) => {
  const options = {
    multiples: false,
    keepExtensions: true,
    uploadDir: uploadDir,
    maxFileSize: 50 * 1024 * 1024 // 5MB

  };
  const form = (0, _formidable.default)(options);
  let files = [];
  let fields = [];

  form.onPart = function (part) {
    if (!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
      this._handlePart(part);
    } else {
      form._error(new Error('File type is not supported'));
    }
  };

  form.parse(req).on('field', (fieldName, value) => {
    fields.push({
      fieldName,
      value
    });
  }).once('file', (fieldName, file) => {
    files.push({
      fieldName,
      file
    }); //files = { ...{ fieldName, file } }
  }).once('end', () => {
    console.log('-> upload done');
    req.fileAttrb = {
      files: files,
      fields: fields
    };
    next();
  });
};

const uploadMultipleFile = async (req, res, next) => {
  const options = {
    multiples: true,
    keepExtensions: true,
    uploadDir: uploadDir,
    maxFileSize: 50 * 1024 * 1024 // 5MB

  };
  const form = (0, _formidable.default)(options);
  let files = [];
  let fields = []; // check tiap attribute

  form.onPart = function (part) {
    if (!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
      this._handlePart(part);
    } else {
      form._error(new Error('File type is not supported'));
    }
  };

  form.parse(req).on('field', (fieldName, value) => {
    fields.push({
      fieldName,
      value
    });
  }).on('file', (fieldName, file) => {
    files.push({
      fieldName,
      file
    }); //files = { ...{ fieldName, file } }
  }).once('end', () => {
    console.log('-> upload done');
    req.fileAttrb = {
      files: files,
      fields: fields
    };
    next();
  });
};

const showProductImage = async (req, res) => {
  const filename = req.params.filename;
  const url = `${process.cwd()}/${_config.default.UPLOAD_DIR}/${filename}`;

  _fs.default.createReadStream(url).on("error", () => responseNotFound(req, res)).pipe(res);
};

function responseNotFound(req, res) {
  res.writeHead(404, {
    "Content-Type": "text/plain"
  });
  res.end("Not Found");
}

var _default = {
  uploadSingleFile,
  showProductImage,
  uploadMultipleFile
};
exports.default = _default;
//# sourceMappingURL=UpDownloadHelper.js.map