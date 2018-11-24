var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sctf"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM environment", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    document.getElementById(3).innerHTML = result;
  });
});