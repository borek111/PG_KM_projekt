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

if (isset($_POST["stawka"])) {
    $stawka = $_POST["stawka"];
    
    if (!(empty($stawka) || !is_numeric($stawka) || $stawka <= 0)) 
    {
        echo "Stawka: " . $stawka; 
    } 
      
    }
mysqli_close($conn);
?>

</body>
</html>