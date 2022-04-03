const express = require("express")
var Mba = require("../models/mba.model")
const router = express.Router();

router.post("",async(req,res)=>{
    try{
    const mba=await Mba.create(req.body)
     return res.status(200).send(mba)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


router.get("",async(req,res)=>{
    try{
    const mba=await Mba.find()
     return res.status(200).send(mba)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
    const mba=await Mba.findByIdAndUpdate(req.params.id,req.body,
        {new:true,})
     return res.status(200).send(mba)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports = router;