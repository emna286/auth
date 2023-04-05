const jwt=require ('jsonwebtoken')
const isAuth=(req,res,next)=>{
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')){
        return res.status(401).json({msg:'no token, unauthorized'})
    }
    else{
        const token=req.headers.authorization.split(" ")[1]
        jwt.verify(token,process.env.TOKEN_SECRET,(err,decoded)=>{
            if (err){
    return res.status (401).json({msg:'unauthorized'})
            }
            else {
                console.log(decoded)
                req.user=decoded
                next()
            }
        })
}

}
module.exports=isAuth;