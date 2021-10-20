var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tms"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tblusers limit 0,4 ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
