"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('line_items', {
    lite_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lite_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lite_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    lite_subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    lite_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    lite_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "lite_cart_prod_uq"
    },
    lite_cart_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cart',
        key: 'cart_id'
      },
      unique: "lite_cart_prod_uq"
    },
    lite_order_name: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'line_items',
    schema: 'public',
    timestamps: false,
    indexes: [{
      name: "lite_cart_prod_uq",
      unique: true,
      fields: [{
        name: "lite_cart_id"
      }, {
        name: "lite_prod_id"
      }]
    }, {
      name: "lite_id_pk",
      unique: true,
      fields: [{
        name: "lite_id"
      }]
    }]
  });
};
//# sourceMappingURL=line_items.js.map