const express = require("express")
var MediaPresence = require("../models/mediaPresence.model")
const router = express.Router();

router.post("",async(req,res)=>{
    try{
    const mediapresence=await MediaPresence.create(req.body)
     return res.status(200).send(mediapresence)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


router.get("",async(req,res)=>{
    try{
    const mediapresence=await MediaPresence.find()
     return res.status(200).send(mediapresence)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
    const mediapresence=await MediaPresence.findByIdAndUpdate(req.params.id,req.body,
        {new:true,})
     return res.status(200).send(mediapresence)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports = router;