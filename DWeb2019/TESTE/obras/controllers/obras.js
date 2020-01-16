var Obra = require('../models/obras')
var mongoose = require('mongoose')

const Obras = module.exports

// Devolve a lista de Obras
module.exports.listar = () =>{
    return Obra
        .find()
        .exec()
}
// Devolve a lista de obras do compositor XXX
module.exports.obras_compositor = x =>{
    return Obra
        .find({compositor: x})
        .exec()
}

// Devolve a informação da obra com ID id1
module.exports.consultar = id1 =>{
    return Obra
        .find({_id: id1})
        .exec()
}

// Devolve a lista de tipos de obras do json
module.exports.listaTipos = () =>{
    return Obra
            .distinct('tipo')
            .exec()
}

// Devolve a lista de tipos de obras do json
var ObjectId = mongoose.Types.ObjectId;
module.exports.obras_instrumento = x =>{
    return Obra
            .aggregate()
            .match({"_id": "$cast", "instrumentos.designacao": x})
            .project({ 
                "instrumentos": {
                    "$filter": {
                        "input": "$instrumentos", 
                        "as": "item",
                        "cond": { "$eq": [ "$$item.designacao", x] }
                    }
                }
            })
            .find({instrumento: x})
            .exec()
}

