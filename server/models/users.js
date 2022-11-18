const {Schema, model} = require('mongoose')

const mydata = new Schema({
    name: {type: String},
    pass: {type: String},
    role: {type: String, default:"guest"},
    // ava_path:{type:String},
    notifs:{
        notif:[{
            author:{type:String},
            text:{type:String}
        }]        
    },
    korz :{
        items:[{
            id:{ type: Number},
            name:{type: String},
            cost: {type:Number},
            count:{
                    type:Number,
                    default: 1
                }
        }]

    }
},{versionKey: false})


module.exports = model('users', mydata) 