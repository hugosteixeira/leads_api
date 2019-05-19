'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "horario" on table "Leads"
 * changeColumn "created_at" on table "Leads"
 *
 **/

var info = {
    "revision": 2,
    "name": "teste1",
    "created": "2019-05-18T23:28:57.968Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "Leads",
        "horario",
        {
            "type": Sequelize.DATE,
            "field": "horario",
            "allowNull": false
        }
    ]
},
{
    fn: "changeColumn",
    params: [
        "Leads",
        "created_at",
        {
            "type": Sequelize.DATE,
            "field": "created_at",
            "allowNull": true
        }
    ]
}
];

module.exports = {
    pos: 0,
    up: function (queryInterface, Sequelize) {
        var index = this.pos;
        return new Promise(function (resolve, reject) {
            function next() {
                if (index < migrationCommands.length) {
                    let command = migrationCommands[index];
                    console.log("[#" + index + "] execute: " + command.fn);
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
