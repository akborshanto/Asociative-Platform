1. Install Dependencies
mkdir my-mvc-project
cd my-mvc-project
npm init -y
npm install  express dotenv cors mongodb body-perser mongoose

my-mvc-project/
│
├── models/
│   └── user.js
│
├── controllers/
│   └── userController.js
│
├── routes/
│   └── userRoutes.js
│
├── config/
│   └── database.js
│
├── app.js
└── package.json

<!-- DB CONNECT -->
1.env file
MONGO_URL= mongodb+srv://social-media:N2f9FIefRPJYIFzQ@cluster1.phei2xm.mongodb.net/social-media
2.config,js
require('dotenv').config()
const dev={
    app:{
        port:process.env.PORT ||  5000,//deploy port
      
    },
    db:{
          url:process.env.MONGO_URL   || "mongodb://localhost:27017/social-media"
    }
}
module.exports= dev;

3.db .js
const mongoose=require('mongoose')

const config=require('./config')
const dbURL=config.db.url;
mongoose.connect(dbURL)
.then(()=>console.log("MONGODB CONNECT"))
.catch((err)=>{
    console.log(err)
    //0 success
    //1 fail //server bondo hoi
    process.exit(1)//process.exit() মেথডটি Node.js প্রক্রিয়াটিকে (Node.js process) বন্ধ করার জন্য ব্যবহার করা হয়। এই মেথডটি একটি exit code গ্রহণ করে, যা ইঙ্গিত করে কেন প্রক্রিয়াটি বন্ধ করা হয়েছে। একটি সাধারণ exit code হল 0
})

4.index.js
const config=require('./config/config')
const port = config.app.port;//config
