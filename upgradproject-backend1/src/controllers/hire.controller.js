const express = require("express")
var Hire = require("../models/hire.model") 
const transporter = require("../configs/mail")
const path = require("path")
const router = express.Router();

router.post("",async(req,res)=>{
    try{
    const hire = await Hire.create(req.body)
    transporter.sendMail({
        from: '"Amazon admin" <admin@amazon.com>', 
        to: hire.email, 
        subject: ` Welcome to UpGrad ${hire.fullName} `, 
        text: `Hi ${hire.fullName}, We are happy to send a callback to you that We want to hire you.For interview details contact 987654321`, 
        alternatives: [
           
           {   
               filename: 'user.details.txt',
               path : path.join(__dirname,"../mailers/user.details.txt")
           },
       ],
      
 })        
     return res.status(200).send({message  : "user registered successfully"})
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


router.get("",async(req,res)=>{
    try{
    const hire =await  Hire.find()
     return res.status(200).send( hire)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.get("/:id",async(req,res)=>{
    try{
    const  hire = await  Hire.findById(req.params.id).lean().exec()
     return res.status(200).send( hire)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})



module.exports = router;