const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  /* usernaem */
  userName: {
    type: "string",
    required: true,


    unique: true,
  },
  email: {
    type: "string",
    required: true,


    unique: true,
  },
  password: {
    type: "string",
    required: true,
    min: 6,
  },

  profilePicture: {
    type: "string",
    default: "",
  },

  followers: {
    type: Array,
    default: [],
  },
  fololowing: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: "boolean",
    default: false,
  },

createdAt:{
    type:Date,
    default : new Date(),
}
,
desc:{
  type: "string",
  max:50,
}
,city:{
  type:String,
  max:50
},
city:{
  type:String,
  max:50
}
,from:{
  type:String,
  max:50
},

relatinonShp:{
  type:Number,
  enum:[1,2,3]
}

});
const  User=mongoose.model('user',userSchema)

module.exports=User;


