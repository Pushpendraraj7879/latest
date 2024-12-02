const mongoose=require("mongoose")
const adminSchema=new mongoose.Schema({
    number:{
        type:String,
        required:true
    }

})

const Admin= mongoose.model("number",adminSchema)
module.exports=Admin
