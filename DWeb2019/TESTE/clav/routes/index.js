var express = require('express');
var router = express.Router();
var axios = require('axios');


/* GET lista de tipologias. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  .then(dados =>{
    res.render('lista-entidades',{lista:dados.data});
  })
  .catch(erro => {
    res.render('error', {erro:erro})
  })
});


router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var entidade,tipologias,dono,participante;
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  .then(dados=>{
    entidade=dados.data;
    axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados=>{
      tipologias=dados.data;
      axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+id+'/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados=>{
      dono=dados.data;
      axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+id+'/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados=>{
      participante=dados.data;
      res.render('pag-entidade',{ent:entidade,tip:tipologias,dn:dono,par:participante})
    })
    .catch(erro=>{
      res.render('error',{error:erro});
    })
    })
    .catch(erro=>{
      res.render('error',{error:erro});
    })
    })
    .catch(erro=>{
      res.render('error',{error:erro});
    })
  
  })
  .catch(erro=>{
    res.render('error',{error:erro});
  })

});


module.exports = router;
