const mongoose=require("mongoose")
const adminSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true
    }

})

const Admin= mongoose.model("text",adminSchema)
module.exports=Admin
