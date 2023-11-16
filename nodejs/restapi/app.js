const express=require('express')
const app=express();
const mongoose=require('mongoose')


// const bodyParser=require("body-parser");

app.use(express.urlencoded({extended:true}))
app.use(express.json());
// app.use(bodyParser.json())
const routeCourses=require('./routes/courses')


app.use('/api/courses',routeCourses)

app.get('/',(req,res)=>{
    res.send("the server is running")
})

mongoose.connect("mongodb+srv://surya:Surya@123@cluster0.vsup8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true},()=>{
  console.log("DATA BASE IS CONNECTED !!!!")
})

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))