const userModel=require('./../Models/User')
const jwt=require('jsonwebtoken')

exports.isAuthenticated=async(request,response,next)=>{

      const {token}=request.cookie

      if(!token)
      {
        response.status(400).json({
            success: false,
        message: "Please Login First",
        })
      }

      const decoded=jwt.verify(token,process.env.JWT_SECRET)
      const id=decoded.id
      const user=await userModel.findById(id)

      request.user=user
}

