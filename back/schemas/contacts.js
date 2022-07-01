const mongoose = require('mongoose')
const {Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type: String,
        default:null
    },
    age:{
        type: Number,
        default:null
    }

});
const User=mongoose.model('User', userSchema)
module.exports=User