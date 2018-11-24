const express = require('express');
const mysql = require('mysql');

//Establish sql connection
const db = mysql.createConnection({
    host     : 'localhost', //'localhost',
    user     : 'root', //'root',
    password : '',
    database  : 'sctf'
});

//connect
db.connect((err) => {
    if(err){
        throw err; 
    }
    console.log('Mysql Connected..');
});

const app = express();

// With new DB queries
// Getting all the lat lngs
//#List Residential with District
app.get('/environment', (req, res) => {
    let sql = 
    'SELECT * from environment';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});

app.get('/testing/:lvl/:day/:map/:veh/:ped', (req, res) => {
    var levelS = req.params.lvl;
    var dayS = req.params.day;
    var mapS = req.params.map;
    var vehicleS = req.params.veh;
    var pedestrianS = req.params.ped;
    console.log(levelS,dayS,mapS,vehicleS,pedestrianS);
    let sql = 
    'UPDATE environment SET level = "'+ levelS + '", day_night = "'+ dayS + '", map = "'+ mapS + '", vehicle = '+ vehicleS +', pedestrian = '+ pedestrianS + ' WHERE level ="' + levelS + '" ;';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});

// app.get('/hi/:level', function (req, res) {
//     var lvl = req.params.level;
//   res.send('PUT request to homepage');
//   console.log(123);
// });




app.listen('3000', () => {
    console.log('Server started on port 3000');
});