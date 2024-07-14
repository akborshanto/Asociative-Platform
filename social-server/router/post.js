const express=require('express')
const userPost = require('../model/post')
const router=express.Router()

router.post("/userPost",userPost)
module.exports=router;