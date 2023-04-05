const mongoose=require('mongoose')
require('dotenv').config()
const connect=()=>{
    mongoose.connect(process.env.MONGOOPSW)
    .then(()=>console.log('connected'))
    .catch(err=>console.log(err))
}
module.exports=connect