const mongoose=require('mongoose')

const clothSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    extras:{
        type:String,
        required:true
    },
    
    image_url:String


})

module.exports=mongoose.model("cloth",clothSchema)