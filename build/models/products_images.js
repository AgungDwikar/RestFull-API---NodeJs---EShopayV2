"use strict";

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('products_images', {
    prim_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prim_filename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    prim_filesize: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    prim_filetype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    prim_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    prim_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'prod_id'
      }
    }
  }, {
    sequelize,
    tableName: 'products_images',
    schema: 'public',
    timestamps: false,
    indexes: [{
      name: "prim_id_pk",
      unique: true,
      fields: [{
        name: "prim_id"
      }]
    }]
  });
};
//# sourceMappingURL=products_images.js.map