const User=require('../models/userSchema');
const bcrypt=require ('bcrypt');
const jwt=require('jsonwebtoken');
const userController={
register: async(req,res)=>{
const {name,email,password}=req.body;
if(!name||!email||!password){
    return res.status (400).json({msg:'please fill all fields'})
}
if (await User.findOne({email})){
    return res.status(400).json({msg:'user already exists'})
}
const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password,salt)
const user=await User.create ({name,email,password:hashedPassword})
if (user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        token:genToken(user.id)
    })
}
},
login: async(req,res)=>{
const {email,password}=req.body;
if (!email || !password){
return res.status(400).json ({msg:'Fill all fields'})
}
const user= await User.findOne({email})

    if (!user){
    return res.status(400).json ({msg:'user does not exist'})
}
const isMatch=await bcrypt.compare(password,user.password)
if (!isMatch){
return res.status (400).json({msg:'invalid password'})
}
res.status(200).json({
    _id:user._id,
    name:user.name,
    email:user.email,
    token:genToken(user.id)
})
},
me: (req,res)=>{
    return res.status(200).json({
        _id:req.user.id,
        name:req.user.name,
        email:req.user.email,
        token:genToken(req.user.id)
    })
    
    
}
}
const genToken=(id)=>{
    return  jwt.sign({id},process.env.TOKEN_SECRET,{expiresIn:'30d'})
}
module.exports=userController