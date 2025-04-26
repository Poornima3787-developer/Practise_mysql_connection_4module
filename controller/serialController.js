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

const updateEntry=(req,res)=>{
  const {id}=req.params;
  const {name}=req.body;
  const updateQuery="UPDATE serial set name=? where id=?";
  db.execute(updateQuery,[name,id],(err,result)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if(result.affectedRows === 0){
      res.status(404).send("Serial is not found");
      return;
    }
    res.status(200).send("User has been created");
  })
}

const deleteEntry=(req,res)=>{
  const {id}=req.params;
  const deleteQuery="DELETE FROM serial where id=?";
  db.execute(deleteQuery,[id],(err,result)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if(result.affectedRows === 0){
      res.status(404).send("Serial is not found");
      return;
    }
    res.status(200).send(`User has been deleted id ${id}`);
  })
}

module.exports={
  addEntries,
  updateEntry,
  deleteEntry
};