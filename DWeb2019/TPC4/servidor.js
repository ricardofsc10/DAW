var http = require('http')

var myserver = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Olá turma de 2019!');
})
myserver.listen(7777)
console.log('Servidor à escuta na porta 7777...')