import express from 'express'
import {updateUser,deleteUser,getUserId,getUsers} from '../controllers/user.js'
import {verifyToken,verifyUser,verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router();

//router.get("/checkauth",verifyToken,(req,res,next)=>{
  //  res.send("Hello user, you are logged in!")
//})
//router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
 //   res.send("Hello user, you are logged in and you can delete your account")
//})
//router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//    res.send("Hello admin, you are logged in and you can delete all accounts")
//})


//Update
router.put("/:id",verifyUser,updateUser);  
//Delete
router.delete("/:id",verifyUser,deleteUser) 
//Get {id}
router.get("/:id",verifyUser,getUserId) 
//Get all Users
router.get("/",verifyAdmin,getUsers) 


export default router;