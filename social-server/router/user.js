const express=require('express');

const updates= require('../controller/uer');
const deleteUser = require('../controller/uer');
const getSingleUser = require('../controller/uer');
const follow = require('../controller/uer');


const router=express.Router()

router.put("/update/:id",updates)
router.delete("/delete/:id",deleteUser)
router.get("/single/:id",getSingleUser)

router.put("/follower/:id",follow)




module.exports=router;