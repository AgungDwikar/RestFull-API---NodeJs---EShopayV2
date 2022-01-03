const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('token_refresh', {
    tore_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    tore_expire_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'token_refresh',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tore_id_pk",
        unique: true,
        fields: [
          { name: "tore_id" },
        ]
      },
    ]
  });
};
