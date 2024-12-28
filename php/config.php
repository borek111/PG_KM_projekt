<?php
$servername = "localhost";
$username = "root"; 
$password = "";      
$dbname = "PG_KM_projekt";  

$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
    die("Połączenie nieudane: " . mysqli_connect_error());
}

$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
mysqli_query($conn, $sql);

mysqli_close($conn);
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Połączenie z bazą danych nieudane: " . mysqli_connect_error());
}

$table_sql = "CREATE TABLE IF NOT EXISTS gry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nazwaGry VARCHAR(100) NOT NULL,
    wygrana FLOAT NOT NULL,
    przegrana FLOAT NOT NULL,
    czyWygrana BOOLEAN NOT NULL
)";

mysqli_query($conn, $table_sql);

?>
