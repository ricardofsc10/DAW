var http = require('http');
var fs = require('fs');

var myserver = http.createServer(function(req,res){
	var partes=req.url.split('/')
    var paginas=partes[partes.length-1]
    console.log(paginas)
    if(parseInt(paginas)<123 && parseInt(paginas)>0){
        fs.readFile('dataset/arq' + paginas + '.xml', function(err,data){
            res.writeHead(200, {'Content-Type': 'text/xml; charset=utf-8'});
            res.write(data)
            res.end();    
        })
    }
    else if(paginas=="arqueossitios.xsl"){
        fs.readFile('arqueossitios.xsl', function(err,data){
            res.writeHead(200, {'Content-Type': 'text/xml; charset=utf-8'});
            res.write(data)
            res.end()
        })
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write("Ficheiro inexistente: " + paginas)
        res.end();
    }
}).listen(7777)

console.log('Servidor à escuta na porta 7777..');