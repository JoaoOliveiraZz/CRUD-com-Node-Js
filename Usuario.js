const Sequelize = require('sequelize');

const Database = require('./Database');

const Usuarios = Database.define('Usuarios',
    {
        Id: {
            type: Sequelize.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull : false
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

module.exports = Usuarios;