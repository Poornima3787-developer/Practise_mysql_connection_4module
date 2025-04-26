const express=require('express');
const db=require('./utils/db-connection');
const serialModel=require('./models/serial');
const serialRouter=require('./routes/serialRoutes');
const app=express();

app.use(express.json());

app.get("/" ,(req,res)=>{
  res.send("Connection")
})

app.use('/serial',serialRouter);

db.sync({force:true}).then(()=>{
  app.listen(3000,(req,res)=>{
    console.log("Server is running");
  }) 
}).catch((err)=>{
  console.log(err);
})

