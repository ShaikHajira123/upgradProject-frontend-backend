const express = require("express")
var Softwaretech= require("../models/software&tech.model")
const router = express.Router();

router.post("",async(req,res)=>{
    try{
    const softwaretech=await Softwaretech.create(req.body)
     return res.status(200).send(softwaretech)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


router.get("",async(req,res)=>{
    try{
    const softwaretech=await Softwaretech.find()
     return res.status(200).send(softwaretech)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
    const softwaretech=await Softwaretech.findByIdAndUpdate(req.params.id,req.body,
        {new:true,})
     return res.status(200).send(softwaretech)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports = router;