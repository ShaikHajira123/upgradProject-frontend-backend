const express = require("express")
var Datascience= require("../models/datascience.model")
const router = express.Router();

router.post("",async(req,res)=>{
    try{
    const datascience=await Datascience.create(req.body)
     return res.status(200).send(datascience)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


router.get("",async(req,res)=>{
    try{
    const datascience=await Datascience.find()
     return res.status(200).send(datascience)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
    const datascience=await Datascience.findByIdAndUpdate(req.params.id,req.body,
        {new:true,})
     return res.status(200).send(datascience)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports = router;