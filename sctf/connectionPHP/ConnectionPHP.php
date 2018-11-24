<?php

define("servername", "localhost");
define("username", "psread");
define("password", "12345678");
define("db", "sctf");

// Create connection
$conn = mysqli_connect(servername, username, password, db);
$query1 = "SELECT id, type FROM `attractions` ";
$attractions_result = mysqli_query($conn, $query1);

$query2 = "SELECT title, description, picture, type FROM `activities` ";
$activities_result = mysqli_query($conn, $query2);


// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>

