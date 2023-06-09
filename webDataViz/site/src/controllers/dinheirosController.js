var usuarioModel = require("../models/usuarioModel");

function upar(req, res) {
    var dinheiros = req.body.dinheirosServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (dinheiros == undefined) {
        res.status(400).send("Dinheiros está undefined");
    } else {
        usuarioModel.pontuacao(dinheiros, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    upar
    }