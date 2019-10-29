function apagaItem(titulo,ficheiro){
    console.log('Vou tentar apagar o titulo ' + titulo + '...')
    axios.delete('/musica?' + titulo)
        .then(response => window.location.assign('/gerir')) //quando o pedido tiver resposta (promessa)
        .catch(error => console.log(error))
}

function editaItem(p,l,t,m,f,d){
    axios.delete('/musica?' + t + '&' + f)
        .then(response => window.location.assign('/registar?prov=' + p + '&local=' + l + '&tit=' + t + '&musico=' + m + '&duracao=' + d ))
        .catch(error => console.log(error))
}