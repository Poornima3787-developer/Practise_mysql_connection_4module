const mysql=require('mysql2');
const {Sequelize}=require('sequelize');
const sequelize=new Sequelize('testdb','root','Poornima@3787',{
  host:'localhost',
  dialect:'mysql'
});

(async()=>{
  try{
    await sequelize.authenticate();
    console.log("Connection to the database has been created");
  }catch(err){
    console.log(err);
  }
})();

module.exports=sequelize;
