
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

// mongoose.connect('mongodb://localhost:4400/users',{
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
const userSchema = new mongoose.Schema(
    [{
    Name: {type : String, required : true},
    email : {type : String, required : true, unique:true},
    password : {type : String, required : true},
    mobileNo:{type:Number,required:true}
   
}],{
    timestamps : true,
    versionKey : false,
})

userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("user", userSchema)




