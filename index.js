const express = require("express")
const app= express()
const mongoose=require("mongoose")
const Admin=require("./models/admin")
const Message=require("./models/message")
const Number=require("./models/number")
const Text=require("./models/text")
const cors=require("cors")
require("dotenv").config()
app.use(cors({
   origin: 'http://localhost:3000'
   
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect(process.env.MONGO_URL).then(
    console.log("database is connected successfully")
)



app.post("/login",async(req,res)=>{
    const {username,password}=req.body
    if(!username && !password){
        res.status(400).json({message:"username and password is require"})
    } 

    try{
        const user=await Admin.findOne({username})    
        if (!user) {
             res.status(400).json({ message: "Invalid credentials" });
          }
          
          
         if(user.password !== password){
            res.status(400).json({ message: "Invalid password" });
         }else{
            res.status(200).json({ message: "successfully match username password" });
         }

        
      
    }catch{
         res.status(500).json({error:error})
    }


})


app.post("/message",async(req,res)=>{
    console.log(req.body)
    const {fullName,email="",mobile="",subject="",message=""}=req.body
    if(!fullName){
        res.status(400).json({message:"fullname require"})
    } 

    try{
         await Message.create({fullName,email,mobile,subject,message})   
          res.status(200).json({message:"message is store successfully"})
    }catch(error){
         res.status(500).json({error:error})
    }


})

app.get("/getmessage",async(req,res)=>{
    
    try{
        const messages= await Message.find()   
          res.status(200).json({data:messages})
    }catch(error){
         res.status(500).json({error:error})
    }


})



app.post("/number",async(req,res)=>{
    console.log(req.body)
    const {number}=req.body
    if(!number){
        res.status(400).json({message:"number require"})
    } 

    try{
         await Number.create({number})   
          res.status(200).json({message:"number is store successfully"})
    }catch(error){
         res.status(500).json({error:error})
    }


})

app.get("/getnumber",async(req,res)=>{
    
    try{
        const numbers= await Number.find()   
          res.status(200).json({data:numbers})
    }catch(error){
         res.status(500).json({error:error})
    }


})

app.post("/text",async(req,res)=>{
    console.log(req.body)
    const {text}=req.body
    if(!text){
        res.status(400).json({message:"message require"})
    } 

    try{
         await Text.create({text})   
          res.status(200).json({message:"message is store successfully"})
    }catch(error){
         res.status(500).json({error:error})
    }


})

app.get("/gettext",async(req,res)=>{
    
    try{
        const messages= await Text.find()   
          res.status(200).json({data:messages})
    }catch(error){
         res.status(500).json({error:error})
    }


})






const Port=3001

app.listen(Port,()=>{
    console.log("server is running successfully",Port)
})


