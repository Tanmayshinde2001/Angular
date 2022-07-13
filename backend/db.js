const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/register',(err)=>{
    if(!err){
        console.log('connection succesful')
    }
    else{
        console.log('error'+err)
    }
})
module.exports = mongoose