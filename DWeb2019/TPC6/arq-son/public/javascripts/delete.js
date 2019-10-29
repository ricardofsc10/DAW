function apagar (identificador){
	console.log('Vou tentar apagar o' + ident+'...')
	
	axios.delete('/'+identificador)
		.then(response=> window.location.assign('/'))
		.catch(error=>console.log(error))
}