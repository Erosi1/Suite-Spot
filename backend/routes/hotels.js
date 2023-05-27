import express from 'express'
import Hotel from '../models/hotel.js'
import {createHotel, deleteHotel,updateHotel,getHotelId, getHotels}  from '../controllers/hotel.js'


const router = express.Router();

//Create
router.post("/",createHotel);
//Update
router.put("/:id",updateHotel);  
//Delete
router.delete("/:id",deleteHotel) 
//Get {id}
router.get("/:id",getHotelId) 
//Get all hotels
router.get("/",getHotels) 



export default router;