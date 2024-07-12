const app= require('./app')
const config=require('./config/config')
const port = config.app.port;//config

app.get('/',(req,res)=>{
  res.send("THISI IS HOME")
})
app.use((req,res,next)=>{
  res.status(404).json({
    message:"ROUTE NOT FOUND"
  })
  
  })
  
  /* servearhandle */
  app.use((err,req,res,next)=>{
    res.status(500).json({
      message:"SERVER SOMEHTING BROKE"
    })
  })


app.listen(port, () => {
  console.log(`LITENDT ${port}`)
})