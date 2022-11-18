const {Schema, model} = require('mongoose')

const mydata = new Schema({
    name: {type: String},
    about: {type: String},
    cost:{type:Number},
    // img:{type: String}
},{versionKey: false})


module.exports = model('products', mydata) 