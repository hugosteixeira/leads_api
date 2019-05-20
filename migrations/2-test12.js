'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "pontuacao" to table "Leads"
 *
 **/

var info = {
    "revision": 2,
    "name": "test12",
    "created": "2019-05-20T03:06:42.325Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Leads",
        "pontuacao",
        {
            "type": Sequelize.INTEGER,
            "field": "pontuacao",
            "allowNull": false
        }
    ]
}];

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
