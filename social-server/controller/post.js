const userPost = require("../model/post");

const postController=async(req,res)=>{
console.log(req.body)

const newPost=new userPost(req.body)


try{

const savePost=await newPost.save()

res.status(200).json(savePost)

}catch(err){

    res.status(500).json(err)
}

 
}
module.exports =postController;
