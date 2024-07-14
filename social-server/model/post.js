const mongoose=require('mongoose')
const  PostSchema=mongoose.Schema({

userId:{
    type:String,
    required:true
}
,
desc:{
    type:String,
    required:true
}
   ,
   img:{
    type:String,

   } ,
   lises:{
    type:Array,
    default:[]
   }
})

const  userPost=mongoose.model('assocaitve-post',PostSchema)
module.exports=userPost;