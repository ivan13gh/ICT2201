<?php
    $pdo=new PDO("mysql:dbname=sctf;host=127.0.0.1","root","");
    $stmt = $pdo->query("SELECT * FROM environment");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);
?>