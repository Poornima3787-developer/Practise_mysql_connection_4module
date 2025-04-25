const connection = require('../utils/db-connection');
const db=require('../utils/db-connection');

const addEntries=(req,res)=>{
const {email,name}=req.body;
const insertQuery='INSERT INTO Serial (email,name) VALUES (?,?)';
db.execute(insertQuery,[email,name],(err)=>{
  if(err){
    console.log(err.message);
    res.status(500).send(err.message);
    return;
  }
  console.log("Value has been inserted");
  res.status(200).send(`Student with name ${name} successfully added`);
}) 
}

module.exports={
  addEntries
};