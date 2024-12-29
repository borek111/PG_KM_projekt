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
    <link rel="stylesheet" href="../css/srodki.css">
</head>
<body>
    <div class="main">
        <header>
            <h1 class="naglowek">Salon Gier PG_KM_3E</h1>
            <p class="srodki">Środki:</p>
        </header>
        <nav>
            <p class="gry">GRY</p>
            <a href="../index.php"><div class="nav_link"><img src="../grafika/indexlogo.png" alt="logo"></div></a>
            <a href="miny.php"><div class="nav_link"><img src="../grafika/miny/minylogo.png" alt="miny"></div></a>
            <a href="ruletka.php"><div class="nav_link"><img src="../grafika/ruletka/ruletkalogo.png" alt="ruletka"></div></a>
            <a href="kostki.php"><div class="nav_link"><img src="../grafika/kostki/kostkilogo.png" alt="kostki"></div></a>
            <a href="hilo.php"><div class="nav_link"><img src="../grafika/karty/kartylogo.png" alt="karty"></div></a>
        </nav>
        <section>
            <div class="srodki_section">
                <div class="srodki_section_div1">
                    <form id="zmiana-srodkow-formularz">
                        srodki <br><input type="number" id="nowe-srodki" placeholder="Wprowadź nową wartość" step="0.01"/><br>
                        <button type="submit">Zmień środki</button>
                    </form>
                    <br><br>
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
</body>
</html>
