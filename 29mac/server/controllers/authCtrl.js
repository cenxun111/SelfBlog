const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authCtrl = {
    register:async(req,res) => {
        try{
            const { username,email,password} = req.body

            const user_name = await Users.findOne({username})
            if(user_name) return res.status(400).json({msg:"This user name is already exists."})
            
            const user_email = await Users.findOne({email})
            if(user_email) return res.status(400).json({msg:"This email is already registered."})

            if(password.length < 8 )
            return res.status(400).json({msg:"Password must be atleast 8 characters."})

            const passwordHash = await bcrypt.hash(password,12)

            const newUser = new Users({
                username,email,password:passwordHash
            })
            const access_token = createAccessToken({id:newUser._id})
            const refresh_token = createRefreshToken({id:newUser._id})

            res.cookie('refreshtoken',refresh_token,{
                httpOnly:true,
                path:'/api/refresh_token',
                maxAge:30*24*60*60*1000
            })
            await newUser.save()

            res.json({
                msg:'Register Success!',
                access_token,
                user:{
                    ...newUser._doc,
                    password:''
                }
            })
        } catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
  
}

const createAccessToken = (payload) => {
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'2d'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'30d'})
}

module.exports = authCtrl