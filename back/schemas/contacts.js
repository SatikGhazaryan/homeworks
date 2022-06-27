const mongoose = require('mongoose')
const {Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    age:{
        type: Number
    },
    gender: {
        type: String,
        default: null,
    }

});
const User=mongoose.model('User', userSchema)
module.exports=User