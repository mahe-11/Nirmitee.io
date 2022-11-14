const express=require('express')
const userRouter=require('./Routes/user')

const cookieParser=require('cookie-parser')
const app = express()
const db=require('./db')

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/user',userRouter)
// app.use('/post',postRouter)


app.listen(4000,()=>{
    console.log("server started on 4000")
})
db.openConnection()

