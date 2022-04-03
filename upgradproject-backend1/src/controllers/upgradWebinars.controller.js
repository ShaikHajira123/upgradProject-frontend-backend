
const express = require("express")
var UpgradWebinar = require("../models/upgradWebinars.model")
const router = express.Router();

router.post("",async(req,res)=>{
    try{
    const upgradwebinars=await UpgradWebinar.create(req.body)
     return res.status(200).send(upgradwebinars)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


router.get("",async(req,res)=>{
    try{
    const upgradwebinars=await UpgradWebinar.find()
     return res.status(200).send(upgradwebinars)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
    const upgradwebinars=await UpgradWebinar.findByIdAndUpdate(req.params.id,req.body,
        {new:true,})
     return res.status(200).send(upgradwebinars)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports = router;