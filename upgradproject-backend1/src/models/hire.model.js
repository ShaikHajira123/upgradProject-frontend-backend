const mongoose = require("mongoose")


const hireSchema = new mongoose.Schema(
    [{
     fullName: {type : String, required : true},
     designation:{type:String , required : true},
     company: {type : String, required : true},
     email : {type : String, required : true},
     mobileNo: {type : String, required : true},
   
}],{
    timestamps : true,
    versionKey : false,
})

module.exports = mongoose.model("hire", hireSchema)