const User = require("../model/user");
const bcrypt=require('bcrypt')
const register = async (req, res,next) => {
  try {
    const salt=await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(req.body.password,salt)
    const newUser = await User({
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
    });
    console.log(newUser);
    /* save the data in user model/collection */
    const user = newUser.save();
    

    res.status(200).json(user);

  //  res.send("DATA SAVED SUCCWES");
  } catch (err) {
    console.log(err);
  
  }
};

const loging=async (req,res)=>{


try{

const user=await User.findOne({email:req.body.email})
!user && res.status(404).json("USER PASSWEROD WRONG")
//compare passwaor and passwors Isexist
const validPassweor=await bcrypt.compare(req.body.password,  user.password)


}catch(err){

  console.log(err)
}

}
module.exports = register;
