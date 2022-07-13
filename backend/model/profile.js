
const mongoose = require('mongoose');


  
  
  

const Employee = mongoose.model('demo',{
    name:{type:String},
    position:{type:String},
    posts:{type:String},
    date:{type:Date,default:Date(Date.now())},
    datefinal:{type:Date},
    venue:{type:String},
    details:{type:String}    
})

module.exports = Employee;