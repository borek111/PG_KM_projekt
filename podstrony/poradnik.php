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
    <link rel="stylesheet" href="../css/poradnik.css">
    <script src="../js/info.js"></script>
    <script src="../js/update.js"></script>
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
            <a href="ruletka.php"><div class="nav_link"><img src="../grafika/ruletka/ruletkalogo.png" alt="ruletka"></div></a>
            <a href="kostki.php"><div class="nav_link"><img src="../grafika/kostki/kostkilogo.png" alt="kostki"></div></a>
            <a href="hilo.php"><div class="nav_link"><img src="../grafika/karty/kartylogo.png" alt="karty"></div></a>
        </nav>
        <section>
            <h2>Środki</h2>
            <p>Aby zagrać w cokolwiek, będziesz potrzebować środków. Możesz je dodać, klikając na napis "Środki" na górze strony, a następnie wpisując w formularzu, ile środków chcesz mieć.</p>

            <h2>Miny</h2>
            <p>Na początku wpisz odpowiednią stawkę i liczbę min w formularzu. Następnie możesz zacząć klikać na pola. Po każdym kliknięciu zwiększa się Twoja wygrana, którą możesz wypłacić w dowolnym momencie, klikając przycisk "Zwróć pieniądze". Jeśli trafisz na pole z miną, przegrywasz.</p>

            <h2>Ruletka</h2>
            <p>W grze w ruletkę najpierw musisz wybrać stawkę, klikając odpowiedni przycisk (1, 10, 50, itd.). Następnie wybierasz jeden z możliwych zakładów: liczbę, kolor (czerwony lub czarny), albo parzystą lub nieparzystą liczbę. Po upływie czasu (gdy zegar dojdzie do 0) zostanie wyświetlony wynik losowania. Jeśli wygrałeś, do Twoich środków zostanie dodana odpowiednia kwota, jeśli przegrałeś, tracisz wartość swojego zakładu. Po zakończeniu rundy masz 10 sekund na zapoznanie się z wynikiem losowania. Następnie gra rozpocznie się od nowa, a Ty możesz postawić nowy zakład.</p>

            <h2>kostki</h2>
            <p>Na początku wpisz odpowiednią stawkę w formularzu i wybierz zakres, w którym obstawiasz, że wylosuje się kostka. Na dole ekranu będzie wyświetlony mnożnik, z jakim aktualnie grasz, oraz Twoja procentowa szansa na zwycięstwo. Jeśli wygrasz, do Twoich środków zostanie dodana wartość zakładu pomnożona przez mnożnik. Jeśli przegrasz, tracisz wartość swojego zakładu.</p>

            <h2>Hilo</h2>
            <p>Na początku wpisz odpowiednią stawkę w formularzu. Następnie wybierz, czy następna karta będzie wyższa lub równa od wylosowanej, czy niższa lub równa od wylosowanej. Ewentualnie możesz pominąć kartę. Możesz wypłacić środki w dowolnym momencie, klikając przycisk "Zwróć pieniądze". Jeśli błędnie obstawisz, przegrywasz.</p>
        </section>
        <footer>
            <div class="divFooter" id="divFooter">
                <?php 
                    include("../php/wyswietl.php");
                ?>
            </div>
        </footer>
    </div>
    <script src="../js/srodki.js"></script>
</body>
</html>
