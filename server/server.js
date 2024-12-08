const express= require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const app=express()
const PORT=process.env.PORT || 6001
app.use(cors(corsOptions))
app.use("/wars",require("./routes/wars"))
app.use("/pepoles",require("./routes/pepoles"))
app.get("/",(req,res)=>{
    res.send("this is the home page")
})
app.listen(PORT,()=>{
    console.log(`server running on port ${ PORT}`)
})