const express = require('express')
const path = require('path')
const port = process.env.port || 3000
const app = express()
const cors= require('cors')
const host = process.env.BASE_URL || "http://localhost:3000";
// this is fordatase
const mongoose = require('mongoose')
mongoose.connect("mongodb://user:user123@ds131765.mlab.com:31765/userstory",{useNewUrlParser:true},(err)=>{
    if (err) {
        throw err.message;
        
    }
    console.log("database connetioed succesfull")
});

app.use(cors());
app.use(express.json())   
// this is show that all data which is req ans res is form of json
app.use(express.urlencoded({extended:true}))

// this is start of api && urllencode is use  for url incoded data send kr rhe to
app.use(express.static(path.join(__dirname,"public")))
app.use('/',express.static(path.join(__dirname,"public")))


// for api royuter 

const Task = require('./routes/Task')

app.use("/api/Task",Task)
app.listen(port,()=>{
    console.log(`listening at port:${port}`)
})