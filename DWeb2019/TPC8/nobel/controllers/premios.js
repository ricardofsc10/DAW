var Premio = require('../models/premios')

Premio.premios = () =>{
    return Prize
        .find({},{year:1,category:1})
        .exec()
}

Premio.premios_id = id =>{
    return Prize
        .find({_id: id})
        .exec()
}

Premio.categorias = () =>{
    return Prize
        .find({},{category:1})
        .distinct('category')
        .exec()
}

Premio.premios_categoria = categoria =>{
    return Prize
        .find({category:categoria})
        .exec()
}

Premio.premios_categoria_data = (categoria,ano) =>{
    return Prize
        .find({category:categoria,year:ano})
        .exec()
}