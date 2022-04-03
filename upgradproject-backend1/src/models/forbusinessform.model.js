const mongoose = require("mongoose")


const forbusinessformSchema = new mongoose.Schema(
    [{
     firstName: {type : String, required : true},
     LastName:{type:String , required : true},
     mobile: {type : String, required : true},
     email: {type : String, required : true},
     company: {type : String, required : true},
     designation: {type : String, required : true},
     data: {type : String, required : false},
   
}],{
    timestamps : true,
    versionKey : false,
})

module.exports = mongoose.model("investors", forbusinessformSchema)