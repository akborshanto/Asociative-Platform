const express=require('express');

const updates = require('../controller/uer');


const router=express.Router()

router.put("/:id",updates)




module.exports=router;