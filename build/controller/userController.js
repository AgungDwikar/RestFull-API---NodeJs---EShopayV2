"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SALT_ROUND = 10;

const signup = async (req, res) => {
  const {
    username,
    firstname,
    lastname,
    email,
    password,
    phone
  } = req.body;
  let hashPassword = password;
  hashPassword = await _bcrypt.default.hash(hashPassword, SALT_ROUND);

  try {
    const result = await req.context.models.users.create({
      user_name: username,
      user_firstname: firstname,
      user_lastname: lastname,
      user_email: email,
      user_password: hashPassword,
      user_phone: phone
    });
    const {
      user_name,
      user_email
    } = result.dataValues;
    res.send({
      user_name,
      user_email
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

const signin = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const result = await req.context.models.users.findOne({
      where: {
        user_email: email
      }
    });
    const {
      user_name,
      user_email,
      user_password
    } = result.dataValues;
    const compare = await _bcrypt.default.compare(password, user_password);

    if (compare) {
      return res.send({
        user_name,
        user_email
      });
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    return res.sendStatus(404);
  }
};

const findAll = async (req, res) => {
  try {
    const result = await req.context.models.users.findAll();
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const findOne = async (req, res) => {
  try {
    const result = await req.context.models.users.findOne({
      where: {
        user_id: req.params.id
      }
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

var _default = {
  findAll,
  findOne,
  signup,
  signin
};
exports.default = _default;
//# sourceMappingURL=userController.js.map