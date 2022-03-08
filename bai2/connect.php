<?php

$host     = 'localhost'; 
$db       = 'bookstore_vn';
$user     = 'root';
$password = 'Quocvuong2712';

$dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

try {
    $conn = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

} catch (PDOException $e) {
     echo $e->getMessage();
}