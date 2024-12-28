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
if (mysqli_query($conn, $sql)) {
    echo "Baza danych '$dbname' została utworzona lub już istnieje.\n";
} else {
    echo "Błąd przy tworzeniu bazy danych: " . mysqli_error($conn) . "\n";
}

mysqli_close($conn);
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Połączenie z bazą danych nieudane: " . mysqli_connect_error());
}

$table_sql = "CREATE TABLE IF NOT EXISTS gry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imie VARCHAR(100) NOT NULL,
    nazwisko VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
)";

if (mysqli_query($conn, $table_sql)) {
    echo "Tabela 'gry' została utworzona lub już istnieje.\n";
} else {
    echo "Błąd przy tworzeniu tabeli: " . mysqli_error($conn) . "\n";
}

mysqli_close($conn);
?>
