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
    echo "<br>";
    if (isset($_POST["kwota-zwrotu-input"])) {
    $kwotaZwrotu = $_POST["kwota-zwrotu-input"];
    echo "Kwota zwrotu: ".$kwotaZwrotu;
    echo "<script>
        var kwotaZwrotu = " . json_encode($kwotaZwrotu) . ";
        showToast('Zwrócono pieniądze! Kwota: ' + kwotaZwrotu, 'linear-gradient(to right, #00b09b, #96c93d)');
    </script>";
    }

    mysqli_close($conn);
    ?>
   
</body>
</html>