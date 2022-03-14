const Sequelize = require('sequelize')

const connection = new Sequelize('cadastro_membros', 'root', '99065832', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection