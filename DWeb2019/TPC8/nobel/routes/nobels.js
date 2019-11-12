var express = require('express')
var router = express.Router()
var axios = require('axios')


router.get('/premios', function(req, res, next) {
    axios.get('http://localhost:3000/api/premios')
        .then(dados =>{
            res.render('lista-premios',{ lista: dados.data});
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
});

router.get('/categorias', function(req, res, next) {
    axios.get('http://localhost:3000/api/categorias')
        .then(dados =>{
            res.render('lista-categorias',{ lista: dados.data});
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
});


module.exports = router;