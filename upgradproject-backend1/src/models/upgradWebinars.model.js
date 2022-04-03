const mongoose = require("mongoose")


const upgradWebinarSchema = new mongoose.Schema(
    [{
    image: {type : String, required : true},
    name: {type : String, required : true},
    desc : {type : String, required : true},
   
}],{
    timestamps : true,
    versionKey : false,
})

module.exports = mongoose.model("upgradWebinar", upgradWebinarSchema)