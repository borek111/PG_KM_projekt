<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
   require_once("config.php");

   $sql1 = "SELECT * FROM gry ORDER BY id DESC LIMIT 5";  
   $query1 = mysqli_query($conn, $sql1);
   
   if (mysqli_num_rows($query1) > 0) {
       while ($row = mysqli_fetch_assoc($query1)) {
           if($row["czyWygrana"]==1)
            {
                echo "<div class='divGry2'>";
                echo $row["nazwaGry"]." <br>wygrana: ".$row["wygrana"];
                echo "</div>";              
            }
            else if($row["czyWygrana"]==0)
            {
                echo "<div class='divGry1'>";
                echo $row["nazwaGry"]." <br>przegrana: ".$row["przegrana"];
                echo "</div>";
            }
       }
   }
   ?>
   
</body>
</html>