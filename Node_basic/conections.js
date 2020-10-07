var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

 function select(str){
     con.query(str);
 }

 function update(table, values, conditions, limits )
{
    con.query("update " + table +" set " +values+ "where 1=1" +conditions + "limit "+limits);
} 


