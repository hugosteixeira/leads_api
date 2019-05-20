'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Leads", deps: []
 * createTable "Produtos", deps: [Leads]
 *
 **/

var info = {
    "revision": 1,
    "name": "test12",
    "created": "2019-05-20T02:01:12.301Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Leads",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "primeiroNome": {
                    "type": Sequelize.STRING,
                    "field": "primeiroNome",
                    "defaultValue": "",
                    "allowNull": false
                },
                "ultimoNome": {
                    "type": Sequelize.STRING,
                    "field": "ultimoNome",
                    "defaultValue": "",
                    "allowNull": false
                },
                "genero": {
                    "type": Sequelize.ENUM('masculino', 'feminino', 'desconhecido'),
                    "field": "genero",
                    "defaultValue": "desconhecido",
                    "allowNull": false
                },
                "nascimento": {
                    "type": Sequelize.DATEONLY,
                    "field": "nascimento",
                    "allowNull": true
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "allowNull": false
                },
                "cpf": {
                    "type": Sequelize.STRING,
                    "field": "cpf",
                    "allowNull": true
                },
                "cnpj": {
                    "type": Sequelize.STRING,
                    "field": "cnpj",
                    "allowNull": true
                },
                "origem": {
                    "type": Sequelize.STRING,
                    "field": "origem",
                    "allowNull": true
                },
                "telefone": {
                    "type": Sequelize.STRING,
                    "field": "telefone",
                    "allowNull": false
                },
                "horario": {
                    "type": Sequelize.DATE,
                    "field": "horario",
                    "allowNull": false
                },
                "mensagem": {
                    "type": Sequelize.STRING,
                    "field": "mensagem",
                    "defaultValue": "",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Produtos",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                },
                "idProduto": {
                    "type": Sequelize.INTEGER,
                    "field": "idProduto",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Leads",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
