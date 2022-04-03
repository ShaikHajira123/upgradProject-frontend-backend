

const express = require("express")
var User = require("../models/user.model")
const authenticate = require("../middlewares/authenticate.js")
const router = express.Router();


router.get("/users",authenticate,async(req,res)=>{
    const users=await User.find()
    res.status(200).send(users)
})

module.exports = router;

