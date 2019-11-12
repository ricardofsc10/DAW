const express= require('express');
const router = express.Router();

var Premio = require('../controllers/premios')

router.get('/premios', function(req, res, next) {
    if (req.query.categoria==undefined){
        Premio.premios()
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.categoria && req.query.data!=undefined){
        Premio.premios_categoria_data(req.query.categoria,req.query.data)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.categoria && req.query.data){
        Premio.premios_categoria(req.query.categoria)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
});

router.get('/premios/:id', function(req, res, next) {
    Premio.premios_id(req.params.id)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
  });

router.get('/categorias', function(req, res, next) {
    Premio.categorias()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
});

module.exports = router;