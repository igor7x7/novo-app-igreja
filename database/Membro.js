const Sequelize = require('sequelize')
const connection = require('./database')

const membro = connection.define('membro', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING,
    },
    nascimento: {
        type: Sequelize.STRING
    },
    estadoCivil: {
        type: Sequelize.STRING
    },
    nomeConjuge: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    escolaridade: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    logradouro: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    dataAdm: {
        type: Sequelize.STRING
    },
    recebido: {
        type: Sequelize.STRING
    },
    condicao: {
        type: Sequelize.STRING
    },
    batismo: {
        type: Sequelize.STRING
    },
    cargo: {
        type: Sequelize.STRING
    },
    nomeIgreja: {
        type: Sequelize.STRING
    },
})

membro.sync({ force: false })
    .then(() => {
        console.log("Tabela criada!!")
    })

module.exports = membro