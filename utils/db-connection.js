const mysql=require('mysql2');

const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Poornima@3787',
  database:'testdb'
})
connection.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("Connection has been created");
  const createQuery=`create table IF NOT EXISTS Serial(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(100)
)`
connection.execute(createQuery,(err)=>{
  if(err){
    console.log(err);
    connection.end();
    return;
  }
  console.log("Table is created")
})
});

module.exports=connection;