
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Book = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phoneno: {
        type: Sequelize.STRING,
        allowNull: false
    }


})

module.exports = Book;