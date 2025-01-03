<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    <script src="../js/komunikat.js"></script>
</head>
<body>
<?php
require_once("config.php");

if (isset($_POST["stawka"]) && isset($_POST["czyWygrana"]) && isset($_POST["kwota"]) && isset($_POST["nazwaGry"])) {
    $stawka = (float) $_POST["stawka"];
    $czyWygrana = $_POST["czyWygrana"];
    $kwota = $_POST["kwota"];
    $nazwaGry = $_POST["nazwaGry"];
    
    $czyWygrana = ($czyWygrana == "true") ? 1 : 0;

    $przegrana = (float)($czyWygrana == 1) ? 0 : $stawka;

    $query = "INSERT INTO gry (nazwaGry, wygrana, przegrana, czyWygrana) VALUES (?, ?, ?, ?)";
    if ($stmt = mysqli_prepare($conn, $query)) {
        // Powiązanie parametrów
        mysqli_stmt_bind_param($stmt, "sddi", $nazwaGry, $kwota, $przegrana, $czyWygrana);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
    } else {
        echo "Błąd przygotowania zapytania: " . mysqli_error($conn);
    }
}
?>

</body>
</html>