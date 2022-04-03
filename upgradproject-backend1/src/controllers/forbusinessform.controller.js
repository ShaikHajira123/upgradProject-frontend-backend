const express = require("express")

const transporter = require("../configs/mail")

const path = require("path")
const Investors= require("../models/forbusinessform.model")


const router = express.Router()



router.post("", async (req,res) => {
    try{
        const investors = await Investors.create(req.body)

        transporter.sendMail({
            from: '"Amazon admin" <admin@amazon.com>', 
            to: investors.email, 
            subject: ` Welcome to UpGrad ${investors.firstName} ${investors.lastName}`, 
            text: `Hi ${investors.firstName}, We are happy to send a callback to you that you can invest and do business with UpGrad`, 
            alternatives: [
               
               {   
                   filename: 'user.details.txt',
                   path : path.join(__dirname,"../mailers/user.details.txt")
               },
           ],
          
     })        
        
        return res.status(201).send({message : " investor registered successfully"})

    }catch(err){
        return res.status(500).send({message : err.message})
    }

    })

    router.get("",async(req,res)=>{
        try{
        const investors =await Investors.find()
         return res.status(200).send(investors)
        }catch(err){
            return res.status(500).send({message:err.message})
        }
    })
    
    router.get("/:id",async(req,res)=>{
        try{
        const investors = await Investors.findById(req.params.id).lean().exec()
         return res.status(200).send(investors)
        }catch(err){
            return res.status(500).send({message:err.message})
        }
    })
   
      
module.exports = router