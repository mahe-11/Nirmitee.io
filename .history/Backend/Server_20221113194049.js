const express=require('express')
const userRouter=require('./Routes/user')

const cookieParser=require('cookie-parser')
const app = express()
const db=require('./db')
require('dotenv').config({path:'./config/config.env'})
app.use(express.json());
app.use(cookieParser())

app.use('/user',userRouter)
// app.use('/post',postRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server started on ${process.env.PORT}`)
    console.log()
})
db.openConnection()

