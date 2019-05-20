'use strict';
module.exports = (sequelize, DataTypes, NOW) => {
  const Lead = sequelize.define('Lead', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    primeiroNome: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
    ultimoNome: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
    genero: { type: DataTypes.ENUM, allowNull: false, values: ['masculino', 'feminino', 'desconhecido'], defaultValue: 'desconhecido' },
    nascimento: { type: DataTypes.DATEONLY, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: true },
    cnpj: { type: DataTypes.STRING, allowNull: true },
    origem: { type: DataTypes.STRING, allowNull: true },
    telefone: { type: DataTypes.STRING, allowNull: false },
    horario: { type: DataTypes.DATE, allowNull: false },
    mensagem: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
    pontuacao: { type: DataTypes.INTEGER, allowNull: false },

  })

  Lead.associate = function (models) {

  };
  return Lead;
};