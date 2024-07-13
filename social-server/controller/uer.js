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
try{
  const user=await User.findByIdAndUpdate(req.params.id,{
      $set: req.body
  })
console.log(user)
  res.status(200).json("UPDATED")
  //res.status(200).json("ACCOUNT HASVWE PDADE")
}catch(err){
  return res.status(500).json(err);
}


  } else {
    return res.status(403).json("you can update at account onley"); //403 Forbidden: অনুমতি প্রদান করা হয়নি, অ্যাক্সেস নিষিদ্ধ।
  }

 // res.send("I AM USER CONTROLLER");
};
module.exports = updates;
