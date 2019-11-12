var mongoose = require('mongoose')
var Schema = mongoose.Schema

var premiosSchema = new Schema({
    year:String,
    category:String,
    overallMotivation:String,   
    laureados:[laureadosSchema]
});

module.exports = mongoose.model('nobels', premiosSchema)