const express=require('express');
const update = require('../controller/uer');


const router=express.Router()

router.put("/",update)




module.exports=router;