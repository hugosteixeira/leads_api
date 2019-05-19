'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "created_at" from table "Leads"
 *
 **/

var info = {
    "revision": 3,
    "name": "fix",
    "created": "2019-05-18T23:30:40.481Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "removeColumn",
    params: ["Leads", "created_at"]
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
