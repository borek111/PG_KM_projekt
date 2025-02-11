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
    <link rel="stylesheet" href="css/index.css"> 
    <script src="js/infoIndex.js"></script>
    <script src="js/update.js"></script>
</head>
<body>
    <div class="main">
        <header>
            <h1 class="naglowek">Salon Gier PG_KM_3E</h1>
            <a href="podstrony/srodki.php"><p class="srodki">Środki:</p></a>
        </header>
        <nav>
            <p class="gry">GRY</p>
            <a href="podstrony/miny.php"><div class="nav_link"><img src="grafika/miny/minylogo.png" alt="bomba"></div></a>
            <a href="podstrony/ruletka.php"><div class="nav_link"><img src="grafika/ruletka/ruletkalogo.png" alt="ruletka"></div></a>
            <a href="podstrony/kostki.php"><div class="nav_link"><img src="grafika/kostki/kostkilogo.png" alt="kostki"></div></a>
            <a href="podstrony/hilo.php"><div class="nav_link"><img src="grafika/karty/kartylogo.png " alt="karty"></div></a>
        </nav>
        <section>
            <div class="lewo">
                <div class="text">
                    <h2>Zagraj w naszym salonie gier online i przeżyj niezapomnianą przygodę! Oferujemy szeroki wybór gier, które zapewnią Ci emocjonującą zabawę oraz szansę na wygrane. Zarejestruj się teraz i rozpocznij grę już dziś!</h2>
                    <br>
                    <p>Kliknij na książkę, aby dowiedzieć się w jaki sposób grać</p>
                </div>
                <div class="poradnik">
                    <div class="poradnik_link">
                        <a href="podstrony/poradnik.php">
                            <img src="grafika/poradnik.png" alt="książka">
                        </a>
                    </div>
                </div>
                           
            </div>
            <div class="prawo">
                <img src="grafika/ziutekKasyno.png" alt="Wesoły mężczyzna" class="ziutek">
            </div>
        </section>
        
        <footer>
            <h2 class="h2Footer">Ostatnie gry na stronie</h2>
            <div class="divFooter" id="divFooter">
                <?php 
                    include("php/wyswietl.php");
                ?>
            </div>
        </footer>
    </div>
    <script>
        if (!sessionStorage.getItem('alertShown')) {
            alert("Jest to projekt szkolny, który powstał wyłącznie w celach edukacyjnych. Strona ta nie ma na celu propagowania ani promowania hazardu w jakiejkolwiek formie. Treści zawarte na tej stronie mają charakter wyłącznie dydaktyczny i służą rozwijaniu umiejętności programistycznych oraz projektowych.");
            sessionStorage.setItem('alertShown', 'true');
        }
    </script>
    <script src="js/srodki.js"></script>
</body>
</html>