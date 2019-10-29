var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')


var myBD = __dirname + '/../arqson.json'
console.log(myBD)

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('index', { title: 'Página do Arquivo Sonoro de EVO'});
})

router.get('/registar', function(req,res,next){
  jsonfile.readFile(myBD, (erro, arqson)=>{
    if(!erro){
      if(req.query.prov!=null){
        if(req.query.obstexto!=null){
          res.render('form-musicas',{lista: musicas, prov:req.query.prov, local:req.query.local, tit:req.query.tit, musico:req.query.musico, inst:req.query.inst, duracao:req.query.duracao, obstexto:req.query.obstexto, intxt:req.query.textoap});
        }
        else{
          res.render('form-musicas',{lista: musicas, prov:req.query.prov, local:req.query.local, tit:req.query.tit, musico:req.query.musico, inst:req.query.inst, duracao:req.query.duracao});
        }
      }
      else{
        res.render('form-musicas',{lista: arqson});
      }
    }
    else{
      res.render('error',{error: erro});
    }
  })
});


router.get('/listar', function(req,res,next){
  jsonfile.readFile(myBD, (erro, arqson)=>{
    if(!erro){
      res.render('listar-musicas',{lista: arqson}); 
    }
    else{
      res.render('error',{error: erro});
    }
  })
});


router.get('/gerir', function(req,res,next){
  jsonfile.readFile(myBD, (erro, arqson)=>{
    if(!erro){
        console.log(req.query.search)
        res.render('gerir-musicas',{lista: arqson, search: req.query.search})
        console.log(__dirname)
    }
    else{
      res.render('error',{error: erro});
    }
  })
});

router.post('/musica', function(req,res,next){
  jsonfile.readFile(myBD, (erro,arqson)=>{
    if(!erro){
      var m = {}
      m["prov"]=req.body.prov
      m["local"]=req.body.local
      m["tit"]=req.body.tit
      m["musico"]=req.body.musico
      m["duracao"]=req.body.duracao
      arqson.push(m)
      jsonfile.writeFile(myBD,arqson,erro=>{
        if(erro){
          console.log(erro)
        }
        else{
          console.log('Registo gravado com sucesso...')
        }
      })
    }
  })
  res.redirect('/registar')
});

router.delete('/musica', function(req,res,next){
  var rem= req.url.split("?")[1]
  jsonfile.readFile(myBD,(erro,arqson)=>{
    if(!erro){
      var titrem=rem.split("&")[0]
      var index=musicas.findIndex(m=>(m.tit.toLowerCase()==titrem.toLowerCase()))
      if(index>-1){
        arqson.splice(index,1)
        jsonfile.writeFile(myBD,arqson,erro=>{
          if(erro)
            console.log(erro)
          else
            console.log('BD atualizada com sucesso')
        })
        res.end('0')
      }
      else{
        console.log("Erro: não consegui encontrar o elemento a remover")
        res.end('1')
      }
    }
    else{
      console.log("Erro na leitura da BD")
      res.end('1')
    }
  })
})

module.exports = router;