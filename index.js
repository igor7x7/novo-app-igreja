const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Membro = require("./database/Membro")

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conectado com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/cadastro", (req, res) => {
    res.render("cadastro")
})

app.get("/membros", (req, res) => {
    Membro.findAll({ raw: true }).then(membros => {
        res.render("membros", {
            membros: membros
        })
    })

})

app.get("/carteira", (req, res) => {
    res.render("carteira")
})

app.get("/cartas", (req, res) => {
    res.render("cartas")
})

app.get("/aniversarios", (req, res) => {
    res.render("aniversarios")
})

app.get("/agenda", (req, res) => {
    res.render("agenda")
})

app.post("/cadastrar", (req, res) => {
    var nome = req.body.nome
    var sobrenome = req.body.sobrenome
    var sexo = req.body.sexo
    var nascimento = req.body.nascimento
    var estadoCivil = req.body.estadoCivil
    var nomeConjuge = req.body.nomeConjuge
    var telefone = req.body.telefone
    var email = req.body.email
    var escolaridade = req.body.escolaridade
    var cep = req.body.cep
    var logradouro = req.body.logradouro
    var bairro = req.body.bairro
    var cidade = req.body.cidade
    var estado = req.body.estado
    var dataAdm = req.body.dataAdm
    var recebido = req.body.recebido
    var condicao = req.body.condicao
    var batismo = req.body.batismo
    var cargo = req.body.cargo
    var nomeIgreja = req.body.nomeIgreja

    Membro.create({
        nome: nome,
        sobrenome: sobrenome,
        sexo: sexo,
        nascimento: nascimento,
        estadoCivil: estadoCivil,
        nomeConjuge: nomeConjuge,
        telefone: telefone,
        email: email,
        escolaridade: escolaridade,
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        dataAdm: dataAdm,
        recebido: recebido,
        condicao: condicao,
        batismo: batismo,
        cargo: cargo,
        nomeIgreja: nomeIgreja
    }).then(() => {
        res.redirect("/")
        console.log("enviado para o banco de dados com sucesso!")
    })
})

app.listen(8080, () => {
    console.log("App rodando!")
})