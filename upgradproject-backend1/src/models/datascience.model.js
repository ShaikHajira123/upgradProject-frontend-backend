const mongoose = require("mongoose")


const datascienceSchema = new mongoose.Schema(
    [{
     uniImage: {type : String, required : true},
     smallImg:{type:String , required : true},
     name: {type : String, required : true},
     orgName: {type : String, required : true},
     months: {type : String, required : true},
     support: {type : String, required : true},
     viewProgram: {type : String, required : true},
   
}],{
    timestamps : true,
    versionKey : false,
})

module.exports = mongoose.model("datascience", datascienceSchema)