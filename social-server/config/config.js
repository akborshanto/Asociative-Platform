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