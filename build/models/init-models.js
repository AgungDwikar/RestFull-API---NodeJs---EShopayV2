"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = exports.default = void 0;

var _sequelize2 = _interopRequireDefault(require("sequelize"));

var _cart2 = _interopRequireDefault(require("./cart.js"));

var _category2 = _interopRequireDefault(require("./category.js"));

var _line_items2 = _interopRequireDefault(require("./line_items.js"));

var _orders2 = _interopRequireDefault(require("./orders.js"));

var _products2 = _interopRequireDefault(require("./products.js"));

var _products_images2 = _interopRequireDefault(require("./products_images.js"));

var _token_refresh2 = _interopRequireDefault(require("./token_refresh.js"));

var _users2 = _interopRequireDefault(require("./users.js"));

var _config = _interopRequireDefault(require("../config/config"));

var _configHeroku = _interopRequireDefault(require("../config/config-heroku"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DataTypes = _sequelize2.default.DataTypes;
// sequelez local di comment untuk deploy ke heroku
// const sequelize = new Sequelize(
//   config.db_name,
//   config.db_username,
//   config.db_password,
//   {
//     dialect : "postgres",
//     pool : {
//       max : 5,
//       min : 0,
//       acquire : 30000,
//       idle : 10000
//     }
//   }
// )
const sequelize = new _sequelize2.default(_configHeroku.default.database, _configHeroku.default.username, _configHeroku.default.password, {
  host: _configHeroku.default.host,
  dialect: _configHeroku.default.dialect,
  operatorsAliases: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: _configHeroku.default.pool.max,
    min: _configHeroku.default.pool.min,
    acquire: _configHeroku.default.pool.acquire,
    idle: _configHeroku.default.pool.idle
  }
});
exports.sequelize = sequelize;

function initModels(sequelize) {
  const cart = (0, _cart2.default)(sequelize, DataTypes);
  const category = (0, _category2.default)(sequelize, DataTypes);
  const line_items = (0, _line_items2.default)(sequelize, DataTypes);
  const orders = (0, _orders2.default)(sequelize, DataTypes);
  const products = (0, _products2.default)(sequelize, DataTypes);
  const products_images = (0, _products_images2.default)(sequelize, DataTypes);
  const token_refresh = (0, _token_refresh2.default)(sequelize, DataTypes);
  const users = (0, _users2.default)(sequelize, DataTypes);
  line_items.belongsTo(cart, {
    as: "lite_cart",
    foreignKey: "lite_cart_id"
  });
  cart.hasMany(line_items, {
    as: "line_items",
    foreignKey: "lite_cart_id"
  });
  products.belongsTo(category, {
    as: "prod_cate",
    foreignKey: "prod_cate_id"
  });
  category.hasMany(products, {
    as: "products",
    foreignKey: "prod_cate_id"
  });
  products_images.belongsTo(products, {
    as: "prim_prod",
    foreignKey: "prim_prod_id"
  });
  products.hasMany(products_images, {
    as: "products_images",
    foreignKey: "prim_prod_id"
  });
  cart.belongsTo(users, {
    as: "cart_user",
    foreignKey: "cart_user_id"
  });
  users.hasMany(cart, {
    as: "carts",
    foreignKey: "cart_user_id"
  });
  orders.belongsTo(users, {
    as: "order_user",
    foreignKey: "order_user_id"
  });
  users.hasMany(orders, {
    as: "orders",
    foreignKey: "order_user_id"
  });
  products.belongsTo(users, {
    as: "prod_user",
    foreignKey: "prod_user_id"
  });
  users.hasMany(products, {
    as: "products",
    foreignKey: "prod_user_id"
  });
  return {
    cart,
    category,
    line_items,
    orders,
    products,
    products_images,
    token_refresh,
    users
  };
}

const models = initModels(sequelize);
var _default = models; // module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;

exports.default = _default;
//# sourceMappingURL=init-models.js.map