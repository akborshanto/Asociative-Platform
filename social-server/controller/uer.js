const bcrypt = require("bcrypt");
const User = require("../model/user");
//update
const updates = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      //sove password issu
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }

    //user find for updata
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      console.log(user);
      res.status(200).json("UPDATED");
      //res.status(200).json("ACCOUNT HASVWE PDADE")
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("you can update at account onley"); //403 Forbidden: অনুমতি প্রদান করা হয়নি, অ্যাক্সেস নিষিদ্ধ।
  }

  // res.send("I AM USER CONTROLLER");
};

//delete
const deleteUser = async (req, res) => {

  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id,{$set:req.body});
console.log(user)
      res.status(200).json("SUCCESS deleted");
    } catch (err) {
      //console.log(err);
      return res.status(500).json(err)
    }
  }else{


    res.status(404).json("you can Delete at account ")
  
  }
  




}
/* get singe user */
const getSingleUser= async(req,res)=>{
  console.log(req.params.id)
try{
/* get the data */
const singleUser=await User.findById(req.params.id)
//destructrue single data
//_doc প্রপার্টি ব্যবহার করে, আমরা ডকুমেন্টের মূল ডেটা একটি প্লেইন জাভাস্ক্রিপ্ট অবজেক্ট হিসেবে অ্যাক্সেস করেছি এবং সেটি রেসপন্স হিসেবে পাঠিয়েছি।
const {password,createdAt,...other}=singleUser._doc;
console.log(other.email)
res.status(200).json(other)

}catch(err){

  return res.status(404).json(err)
}

}
/* fololow a user */
const follow =async (req,res)=>{

  if(req.params.userId !== req.params.id){

try{

const user=await User.findById(req.params.id)

const currentUser=await User.findById(req.params.userId)

if(!user.followers.includes(req.body.userId)){

  await user.updateOne({$push:{followers:req.body.userId}})
await User.updateOne({$pull:{follwings:req.params.id}})
}





}catch(err){
 res.status(403).json("Your alrady follow this user")
}

  }
  
}

module.exports = updates;
module.exports=deleteUser;
module.exports=follow;
