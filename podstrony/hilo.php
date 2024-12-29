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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    <script src="../js/komunikat.js"></script>
    <link rel="stylesheet" href="../css/hilo.css">
  
</head>
<body>
    <div class="main">
        <header>
            <h1 class="naglowek">Salon Gier PG_KM_3E</h1>
            <a href="srodki.html"><p class="srodki">Środki:</p></a>
        </header>
        <nav>
            <p class="gry">GRY</p>
            <a href="../index.html"><div class="nav_link"><img src="../grafika/indexlogo.png" alt="logo"></div></a>
            <a href="miny.html"><div class="nav_link"><img src="../grafika/miny/minylogo.png" alt="bomba"></div></a>
            <a href="ruletka.html"><div class="nav_link"><img src="../grafika/ruletka/ruletkalogo.png" alt="ruletka"></div></a>
            <a href="kostki.html"><div class="nav_link"><img src="../grafika/kostki/kostkilogo.png" alt="kostki"></div></a>
        </nav>
        <section>
            <div class="stawka">
                <div class="stawka_div1">
                <form id="stawkaForm" onsubmit="startGry(); return false;">
                    Stawka: <br>
                    <input type="number" name="stawka" id="stawka" step="0.01">
                    <br><br>
                    <button type="submit" class="postaw">Postaw</button>
                </form>
                    <br><br>
                    <div id="wyniki" class="wyniki">
                        <hr><br><br>
                        <form id="zwrot" onsubmit="zwrotPieniedzy(event);" method="POST" >
                            <p>Zwrot pieniędzy:</p>
                            <p>Kwota do zwrotu: <span id="kwota-zwrotu" name="kwota-zwrotu"></span></p>
                            <input type="hidden" name="kwota-zwrotu-input" id="kwota-zwrotu-input">
                            <button type="submit">Zwróć pieniądze</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="hilo">
                <div class="card" id="kartaText"></div>
                <div class="karty">
                    <img src="../grafika/karty/Apik.png" alt="karta" id="karta">
                </div>
                <div class="info">
                    <div class="zysk_wyzsza" id="zysk_wyzsza">
                       
                    </div>
                    <div class="zysk_nizsza"  id="zysk_nizsza">
                       
                    </div>
                </div>
                <div class="buttony">
                    <button onclick="wybor('WyzszaRowna')">Wyzsza bądź równa</button>
                    <button onclick="wybor('NizszaRowna')">Niższa bądź równa</button>
                    <button onclick="pominKarte()">Pomiń kartę</button>
                </div>
                <p class="wynik" id="wynik"></p>
                <div class="historia_kart">
                    <p class="historia_kart_text">Ostatnie karty</p><br>
                    <div class="historia_kart_div1">
                      
                    </div> 
                </div>
            </div>
        </section>
        <footer>
        <div class="divFooter">
        <?php 
            include("../php/wyswietl.php");
        ?>
        </div>
        </footer>
    </div>
    <script src="../js/srodki.js"></script>
    <script src="../js/hilo.js"></script>
</body>
</html>