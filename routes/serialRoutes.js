const express=require('express');
const {addEntries}=require('../controller/serialController')
const router=express.Router();

router.post("/add",addEntries);

module.exports=router;