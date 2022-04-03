const express = require("express")
var Studyabroad = require("../models/studyabroad.model")
const router = express.Router();

router.post("",async(req,res)=>{
    try{
    const studyabroad = await Studyabroad.create(req.body)
     return res.status(200).send(studyabroad)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


router.get("",async(req,res)=>{
    try{
    const studyabroad=await Studyabroad.find()
     return res.status(200).send(studyabroad)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.get("/:id",async(req,res)=>{
    try{
    const studyabroad=await Studyabroad.findById(req.params.id).lean().exec()
     return res.status(200).send(studyabroad)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


module.exports = router;