const express=require('express')
const userRouter=require('./Routes/user')
const clothRouter=require('./Routes/cloth')
const cookieParser=require('cookie-parser')
const app = express()
const db=require('./config/db')
require('dotenv').config({path:'./config/config.env'})
app.use(express.json());
app.use(cookieParser())

app.use('/user',userRouter)
app.use('/cloth',clothRouter)



app.listen(process.env.PORT,()=>{
    console.log(`server started on ${process.env.PORT}`)
    
})
db.openConnection()

