const Router=require('express').Router()
const userController=require('../controllers/userController')
const isAuth=require('../middlewares/authMiddleware')

//pblic routes
Router.post('/register',userController.register)
Router.post('/login',userController.login)
//private route
Router.get('/me',isAuth,userController.me)

module.exports=Router