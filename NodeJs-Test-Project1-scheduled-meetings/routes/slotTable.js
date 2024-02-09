const express=require('express')
 
const SlotController=require('../controllers/slot');

const routes=express.Router();

routes.get('/getslotdata',SlotController.getslotdata)
routes.post('/add-slot',SlotController.AddSlot)
routes.delete('/delete-slot/:slotId',SlotController.deleteSlot)



module.exports=routes;