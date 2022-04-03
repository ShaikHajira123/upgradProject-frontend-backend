const mongoose = require("mongoose")


const mediaPresenceSchema = new mongoose.Schema(
    [{
    desc : {type : String, required : true},
    image: {type : String, required : true},
   
}],{
    timestamps : true,
    versionKey : false,
})

module.exports = mongoose.model("mediaPresence", mediaPresenceSchema)