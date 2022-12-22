const Sequelize = require ('sequelize');

const Database = new Sequelize ('teste', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = Database;