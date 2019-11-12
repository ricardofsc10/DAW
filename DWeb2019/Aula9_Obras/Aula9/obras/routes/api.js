const express = require('express');
const router = express.Router();

var Obras = require('../controllers/obras')

/* GET: lista de obras */
router.get('/obras', function(req, res,next) {
    if(req.query.ano){
        Obras.obras_ano(req.query.ano)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if(req.query.compositor!=null && req.query.duracao!=null ){
        Obras.obras_compositor_duracao(req.query.ano)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if(req.query.periodo!=null){
        Obras.obras_periodo(req.query.ano)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else {
        Obras.listar()
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro))
    }
})

/* GET: recupera a informação de um aluno */
router.get('/obras/:idObra', function(req, res) {
  Obras.consultar(req.params.idObra)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router