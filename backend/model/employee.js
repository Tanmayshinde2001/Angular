const mongoose = require('mongoose');

const Register = mongoose.model('register',{
    name:{type:String},
    email:{type:String},
    password:{type:String}

})


module.exports = Register;