'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define('Lead', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    horario: DataTypes.DATE,
    telefone: DataTypes.STRING,
    origem: DataTypes.STRING,
    cep: DataTypes.STRING,
    mensagem: DataTypes.STRING
  }, {});
  Lead.associate = function (models) {
    Lead.hasOne(models.Produto, {
      foreignKey: 'idProduto',
    })
  };
  return Lead;
};