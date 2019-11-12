var Obra = require('../models/obras')

const Obras = module.exports

// Devolve a lista de alunos
module.exports.listar = () =>{
    return Obra
        .find()
        .exec()
}

module.exports.obras_ano = year =>{
    return Obra
        .find({anoCriacao: year})
        .exec()
}

module.exports.obras_compositor_duracao = (compositor1,duracao1) =>{
    return Obra
        .find({compositor: compositor1, duracao:duracao1})
        .exec()
}

module.exports.obras_periodo = periodo1 =>{
    return Obra
        .find({periodo: periodo1})
        .exec()
}

// Devolve a informação de um aluno
module.exports.consultar = id1 =>{
    return Obra
        .find({id: id1})
        .exec()
}

