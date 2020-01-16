const express = require('express');
const router = express.Router();

var Obras = require('../controllers/obras')

/* GET: lista de obras */
router.get('/obras', function(req, res,next) {
    /* GET: lista de obras do compositor X */
    if(req.query.compositor){
        Obras.obras_compositor(req.query.compositor)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if(req.query.instrumento){
        Obras.obras_instrumento(req.query.instrumento)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else {
/* GET: lista de obras */
        Obras.listar()
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro))
    }
})

/* GET: recupera a informação de uma obra */
router.get('/obras/:idObra', function(req, res) {
  Obras.consultar(req.params.idObra)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

/* GET: lista de tipos */
router.get('/tipos', function(req, res){
    Obras.listaTipos()
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router