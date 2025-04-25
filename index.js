const express=require('express');
const db=require('./utils/db-connection');
const serialRouter=require('./routes/serialRoutes');
const app=express();

app.use(express.json());

app.get("/" ,(req,res)=>{
  res.send("Connection")
})

app.use('/serial',serialRouter);


app.listen(3000,(req,res)=>{
  console.log("Server is running");
})