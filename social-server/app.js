

const express=require('express');

const cors=require('cors');
require('./config/db')
const router = require('./router/auth');

const app=express()
app.use(cors())

//all router
app.use(express.json())

app.use('/auth',router)
/* invalid route */

  
  

module.exports=app;