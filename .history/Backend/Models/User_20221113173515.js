const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
      },
    
      email: {
        type: String,
        required: true,
        unique: [true, "Email already Exists"],
      },
    
      password: {
        type: String,
        required: true,
        minlength: [6, "password should be minimum 6 characters long"],
        select: false,
      },

      role:{
        type:String,
        required:true,

      }
})

userSchema.pre("save",async function(){

    if(this.isModified("password"))
    {
         this.password=await bcrypt.hash(this.password,10)
    }
})


module.exports= mongoose.model("user",userSchema)