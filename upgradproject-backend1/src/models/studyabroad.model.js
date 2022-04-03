const mongoose = require("mongoose")


const studyabroadSchema = new mongoose.Schema(
    [{
     name: {type : String, required : true},
     mobile:{type:String , required : true},
     email: {type : String, required : true},
   
}],{
    timestamps : true,
    versionKey : false,
})

module.exports = mongoose.model("studyabroad", studyabroadSchema)