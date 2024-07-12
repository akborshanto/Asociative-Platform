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