const mongoose=require("mongoose")
const adminSchema=new mongoose.Schema({
    mobile:{
        type:String,
        required:true
    }

})

const Admin= mongoose.model("number",adminSchema)
module.exports=Admin
