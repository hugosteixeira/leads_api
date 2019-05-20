'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Produto.associate = function (models) {
    Produto.hasOne(models.Lead, { foreignKey: 'idProduto' });

  };
  return Produto;
};