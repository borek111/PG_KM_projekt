<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="PG_KM_3E">
    <title>Salon gier</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    <script src="../js/komunikat.js"></script>
    <link rel="stylesheet" href="../css/kostki.css">

</head>
<body>
    <div class="main">
        <header>
            <h1 class="naglowek">Salon Gier PG_KM_3E</h1>
            <a href="srodki.php"><p class="srodki">Środki:</p></a>
        </header>
        <nav>
            <p class="gry">GRY</p>
            <a href="../index.php"><div class="nav_link"><img src="../grafika/indexlogo.png" alt="logo"></div></a>
            <a href="miny.php"><div class="nav_link"><img src="../grafika/miny/minylogo.png" alt="bomba"></div></a>
            <a href="ruletka.php"><div class="nav_link"><img src="../grafika/ruletka/ruletkalogo.png" alt="ruletka"></div></a>
            <a href="hilo.php"><div class="nav_link"><img src="../grafika/karty/kartylogo.png" alt="karty"></div></a>
        </nav>
        <section>
            <div class="stawka">
                <div class="stawka_div1">
                    <form onsubmit="startGry(); return false;">
                        Stawka <br><input type="number" id="stawka" step="0.01"><br><br><br>
                        <button type="submit" class="postaw">Postaw</button>
                    </form>
                    <br><br>
                    <div id="wyniki" class="wyniki">
                        <hr><br><br>
                        <p id="wygrana" class="wygrana">Ostatnia wygrana: </p><br>
                    </div>
                </div>
            </div>
            <div class="kostki">
                <div class="suwak-container">
                    <p class="text_zakres">Zakres: <span id="zakres-min"></span> - <span id="zakres-max"></span></p>
                    <div id="suwak"></div>
                </div>                

                <div class="kostka1_png">
                    <p class="text">losowana</p>
                    <img src="../grafika/kostki/1.png" id="kostka1_png" alt="kostka1">
                </div>
                <div class="kostka2_png">
                    <p class="text">ostatnia</p>
                    <img src="../grafika/kostki/2.png" id="kostka2_png"alt="kostka2">
                </div>
                
                <div class="info">
                   <div class="mnoznik">
                       <p id="mnoznik">Mnożnik: <br>1 </p>
                   </div>
                   <div class="szanse">
                    <p id="szanse">Szanse: <br>100% </p>
                   </div>
                </div>

            </div>
        </section>
        <footer>
            Ostatnie gry:
            <div>
                TO DO w php
            </div>
        </footer>
    </div>
    <script src="../js/srodki.js"></script>
    <script src="../js/kostki.js"></script>
</body>
</html>