const express = require('express');//!to build backend quickly
const app = express();//!insance of express 
const cors =require('cors')//!for cross origin policy
const port = 8080;

app.use(cors())//!means use this cors package when server starts up


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))//!to serve public folder


require('./dB')


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})