const connection = require('../utils/db-connection');
const db=require('../utils/db-connection');
const Serial=require('../models/serial');

const addEntries=async (req,res)=>{
  try {
    const {email,name}=req.body;
    const serial=await Serial.create({
      email:email,
      name:name
    });
    res.status(200).send(`User with name:${name} is created`)
  } catch (error) {
    res.status(500).send('Unable to make an entry');
  }
}

const updateEntry=async (req,res)=>{
  try {
    const {id}=req.params;
  const {name}=req.body;
  const serial=await Serial.findByPk(id);
  if(!serial){
    res.status(404).send("User is not found");
  }
  serial.name=name;
  await serial.save();
  res.status(200).send(`User has been updated`)
  } catch (error) {
    res.status(500).send('User cannot be updated');
  }
}

const deleteEntry=async (req,res)=>{
  try {
    const {id}=req.params; 
    const serial=await Serial.destroy({
      where:{
        id:id
      }
    })
    if(!serial){
      res.status(404).send("User is not found");
    }
    res.status(200).send(`User has been deleted`)

  } catch (error) {
    res.status(500).send('Error encountered while deleting');
  }
}

module.exports={
  addEntries,
  updateEntry,
  deleteEntry
};