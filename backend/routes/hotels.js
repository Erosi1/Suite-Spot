import express from 'express'
import Hotel from '../models/hotel.js'
import {createHotel, deleteHotel,updateHotel,getHotelId, getHotels,countByCity, countByType,getHotelRooms}  from '../controllers/hotel.js'
import {verifyAdmin} from '../utils/verifyToken.js'


const router = express.Router();

//Create
router.post("/",verifyAdmin,createHotel);
//Update
router.put("/:id",verifyAdmin,updateHotel);  
//Delete
router.delete("/:id", verifyAdmin, deleteHotel);
//Get {id}
router.get("/find/:id",getHotelId) 
//Get all hotels
router.get("/",getHotels) 
router.get("/countByCity",countByCity) 
router.get("/countByType",countByType) 
router.get("/room/:id",getHotelRooms) 



export default router;