

const express=require('express');

const cors=require('cors');
require('./config/db')
const router = require('./router/auth');
const userRouter=require('./router/user')
const postRouter=require('./router/post')
const app=express()
app.use(cors())

//all router
app.use(express.json())

app.use('/auth',router)
app.use('/user',userRouter)
app.use('/post',postRouter)
/* invalid route */

  
  

module.exports=app;