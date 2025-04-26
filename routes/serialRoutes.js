const express=require('express');
const serialController=require('../controller/serialController')
const router=express.Router();

router.post("/add",serialController.addEntries);
router.put('/update/:id',serialController.updateEntry);
router.delete('/delete/:id',serialController.deleteEntry);

module.exports=router;