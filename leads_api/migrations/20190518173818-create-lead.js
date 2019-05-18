'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      horario: {
        type: Sequelize.DATE
      },
      telefone: {
        type: Sequelize.STRING
      },
      origem: {
        type: Sequelize.STRING
      },
      idProduto: {
        type: Sequelize.INTEGER
      },
      cep: {
        type: Sequelize.STRING
      },
      mensagem: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Leads');
  }
};