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
    <script src="../js/info.js"></script>
    <link rel="stylesheet" href="../css/ruletka.css">
    
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
            <a href="miny.php"><div class="nav_link"><img src="../grafika/miny/minylogo.png" alt="miny"></div></a>
            <a href="kostki.php"><div class="nav_link"><img src="../grafika/kostki/kostkilogo.png" alt="kostki"></div></a>
            <a href="hilo.php"><div class="nav_link"><img src="../grafika/karty/kartylogo.png" alt="hilo"></div></a>
        </nav>
        <section>
        
            <div class="ruletka_div">
                <p id="czas_p" class="ruletka_p">Czas: 10s</p>
                <img src="../grafika/ruletka/ruletka.gif" alt="" class="ruletka" id="ruletka_gif"> 
            </div>
            <div class="pola">

                <table id="tabela">
                </table>
            </div>
            <div class="stawka">
                <div class="stawka_2">
                    stawka
                    <form class="formStawka">
                        <button type="submit" id="button1" value="1" onclick="wyborStawka('1');return false;">1</button>
                        <button type="submit" id="button10" value="10" onclick="wyborStawka('10');return false;">10</button>
                        <button type="submit" id="button50" value="50" onclick="wyborStawka('50');return false;">50</button>
                        <button type="submit" id="button100" value="100" onclick="wyborStawka('100');return false;">100</button>
                        <button type="submit" id="button500" value="500" onclick="wyborStawka('500');return false;">500</button>
                    </form>
                </div>
            </div>
        </section>
        <footer>
            <h2 class="h2Footer">Ostatnie gry na stronie</h2>
            <div class="divFooter" id="divFooter">
                <?php 
                    include("../php/wyswietl.php");
                ?>
            </div>
        </footer>
    </div>
    <script src="../js/srodki.js"></script>
    <script src="../js/ruletka.js"></script>
</body>
</html>