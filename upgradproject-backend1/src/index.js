const express = require("express");
const connect = require("./configs/db");
var bodyParser = require('body-parser');
const cors=require("cors")
//const serverless = require("serverless-http")

// const mongodb = require("mongodb")
// var passport = require("passport")
// const path = require('path');
const hireController = require("./controllers/hire.controller")
const studyabroadController = require("./controllers/studyabroad.controller")
const fbformController = require("./controllers/forbusinessform.controller")
const softwaretechController = require("./controllers/software&tech.controller")
const datascienceController = require("./controllers/datascience.controller")
const mbaController = require("./controllers/mba.controller")
const mediapresenceController=require("./controllers/mediaPresence.controller")
const upgradWebinarController=require("./controllers/upgradWebinars.controller")
const userController = require("./controllers/user.controller")
var User = require("./models/user.model")
var {register,login} = require("./controllers/auth.controller")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use("/hire",hireController)
app.use("/studyabroad",studyabroadController)
app.use("/investors",fbformController)
app.use("/softwaretech",softwaretechController)
app.use("/upgradWebinars", upgradWebinarController)
app.use("/mediaPresence",mediapresenceController) 
app.use("/mba",mbaController)
app.use("/datascience",datascienceController)
app.use("/users", userController)
app.post("/register", register)
app.post("/login", login)





app.get('/users', async function(req, res) {
    var users =await User.find({})
            res.status(200).json(users);
        })


app.listen(4900, async () => {
    try{
        await connect();
        console.log("listening on port 4900")
    }
    catch(err){
        console.log(err.message);
    }
});