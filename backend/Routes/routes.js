const { Router, response } = require('express')
const express =require('express')
const Register  = require('../model/employee.js')
const router = express.Router()
var bcrypt = require('bcrypt')
const ObjectId = require('mongoose').Types.ObjectId
const Employee =require('../model/profile.js')
const jwt = require('jsonwebtoken')
router.get('/register',(req,res)=>
{
    Register.find( (err,doc)=>
    {
        if(err){
            console.log("error"+err)
        }
        else{
            res.send(doc)
        }
    })
})


function verifyToken(req, res, next) 
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}



router.post('/login', (req, res) => {
    let userData = req.body
    
    if ((userData.email == "Marvellous") && (userData.password == "Marvellous")) 
    {
      let payload = {subject: 1}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})   
    } 
    else 
    {
        res.status(401).send('Invalid Password')
    } 
})

router.post('/register',(req,res)=>
{
    let emp = new Register({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password

})
    emp.save( (err,doc)=>
    {
        if(err){
            console.log("error"+err)
        }
        else{
            res.send(doc)
        }
    })
})




router.post('/profile',(req,res)=>
{
    let emp = new Employee({
        name:req.body.name,
    position:req.body.position,
    posts:req.body.posts,
    datefinal:req.body.datefinal,
    venue:req.body.venue,
    details:req.body.details
    })
    emp.save((err,doc)=>{
        if(err){
            console.log('error in post data'+err)

        }
        else{
            res.send(doc)
        }
    })
})

router.get('/profile',(req,res)=>{
    Employee.find( (err,doc)=>{
        if(err){
            console.log('error in post data'+err)

        }
        else{
            res.send(doc)
        }
    })
})

router.get('/profile/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findById(req.params.id,(err,doc)=>{
            if(err){
                console.log('error in post data'+err)
    
            }
            else{
                res.send(doc)
            }
        })
    }
    else{
        return res.status(400).send('No record found with id'+req.params.id)
    }
})


router.delete('/profile/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(err){
                console.log('error in delete data'+err)
    
            }
            else{
                res.send(doc)
            }
        })
    }
    else{
        return res.status(400).send('No record found with id'+req.params.id)
    }
})

router.put('/profile/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let emp = {
            name:req.body.name,
        position:req.body.position,
        posts:req.body.posts,
        datefinal:req.body.datefinal,
        venue:req.body.venue,
        details:req.body.details 
        }
        Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
            if(err){
                console.log('error in update data'+err)
    
            }
            else{
                res.send(doc)
            }
        })
    }
    else{
        return res.status(400).send('No record found with id'+req.params.id)
    }
})


module.exports = router