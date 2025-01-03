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
    <link rel="stylesheet" href="../css/miny.css">
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
            <a href="ruletka.php"><div class="nav_link"><img src="../grafika/ruletka/ruletkalogo.png" alt="ruletka"></div></a>
            <a href="kostki.php"><div class="nav_link"><img src="../grafika/kostki/kostkilogo.png" alt="kostki"></div></a>
            <a href="hilo.php"><div class="nav_link"><img src="../grafika/karty/kartylogo.png" alt="karty"></div></a>
        </nav>
        <section>
            <div class="stawka">
                <div class="stawka_div1">
                    <form onsubmit="startGry(); return false;">
                        Stawka <br>
                       
                        <input type="number" id="stawka" placeholder="Podaj stawkę" step="0.01"><br><br>
                    
                        Ilość min <br>
                        <input type="number" id="miny" placeholder="1-24"><br><br>
                    
                        <button type="submit">Postaw</button>
                    </form>
                   <hr style="margin-top: 10px; margin-bottom: 10px;">
                   <form onsubmit="zwrotPieniedzy(event)">
                    <p>Zwrot pieniędzy:</p>
                    <p>Kwota do zwrotu: <span id="kwota-zwrotu">0</span></p>
                    <button type="submit">Zwróć pieniądze</button>
                    </form>
                </div>
            </div>
            <div class="siatka" id="siatka"></div>
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
    <script src="../js/miny.js"></script>

</body>
</html>
