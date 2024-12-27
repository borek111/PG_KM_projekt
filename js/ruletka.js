const uklad = [
    ["0", "3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"],
    ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"],
    ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"]
];

const kolory = {
    "zielony": ["0"],
    "czerwony": ["1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34", "36"],
    "czarny": ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"]
};

var wybor = null;
var graRozpoczeta = false;  
var wybranaStawka;
var czas = 10;  
var czasNaWynik = 10;  
var animacjaTrwa = false;  
var ruletka_gif = document.getElementById("ruletka_gif");
var graZakoncza = false;  
var wynikSprawdzony = false;  
var timerId;
var losINT;
var losSTRING;
var kolor;
var komunikat;

function getColor(value) {
    if (value === "0") return "zielony";
    if (kolory.czerwony.includes(value)) return "czerwony";
    if (kolory.czarny.includes(value)) return "czarny";
    return "";
}


function Losowanie() {
    losINT = Math.floor(Math.random() * 37);
    losSTRING = String(losINT);
    kolor = getColor(losSTRING);
   
}

function zablokujPrzyciski() {
    const wszystkiePrzyciski = document.querySelectorAll('button'); 
    wszystkiePrzyciski.forEach(przycisk => {
        przycisk.disabled = true; 
    });
}

function odblokujPrzyciski() {
    const wszystkiePrzyciski = document.querySelectorAll('button');
    wszystkiePrzyciski.forEach(przycisk => {
        przycisk.disabled = false; 
    });
}



function Czas() {
    if (czas > 0) {
        if (!animacjaTrwa) {
            ruletka_gif.src = "../grafika/ruletka/ruletka.gif";
            animacjaTrwa = true;
        }
        czas -= 1;
        document.getElementById('czas_p').innerHTML = "Czas : " + czas + " s";
    } else if (czas == 0 && czasNaWynik > 0) {
        ruletka_gif.src = "../grafika/ruletka/kulka/k" + losSTRING + ".png"; 
        czasNaWynik -= 1;
        document.getElementById('czas_p').innerHTML = "Czas do następnego losowania: " + czasNaWynik + " s";
        if (!wynikSprawdzony) 
        {
            sprawdzWyniki(); 
            wynikSprawdzony = true; 
            zablokujPrzyciski(); 
        }
    } else if (czas == 0 && czasNaWynik == 0) {

        resetRound();
        startRound();
        wynikSprawdzony = false;  
        odblokujPrzyciski();  
    }
}


function resetRound() {
    czas = 10;
    czasNaWynik = 10;
    animacjaTrwa = false;
    graZakoncza = false;
    wybranaStawka = null;
    wybor = null;
    clearInterval(timerId);  
}

function startRound() {
    Losowanie();
    timerId = setInterval(Czas, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    dodajTabele();
    startRound(); 
});

function dodajTabele() {
    uklad.forEach((row) => {
        const tr = document.createElement('tr');
        row.forEach((value) => {
            const td = document.createElement('td');
            td.textContent = value;
            td.classList.add(getColor(value));
            td.onclick = () => setWybor(value);
            if (value == "0") {
                td.rowSpan = 3;
                tr.appendChild(td);
            } else if (value != "0") {
                tr.appendChild(td);
            }
        });
        tabela.appendChild(tr);
    });

    const trParzystaNieParzysta = document.createElement('tr');
    
    const tdParzysta = document.createElement('td');
    tdParzysta.colSpan = 5;
    tdParzysta.textContent = "parzysta";
    tdParzysta.classList.add("parzysta");
    tdParzysta.onclick = () => setWybor("parzysta");

    const tdCzarny = document.createElement('td');
    tdCzarny.classList.add("czarny");
    tdCzarny.onclick = () => setWybor("czarny");

    const tdCzerwony = document.createElement('td');
    tdCzerwony.classList.add("czerwony");
    tdCzerwony.onclick = () => setWybor("czerwony");

    const tdNieParzysta = document.createElement('td');
    tdNieParzysta.colSpan = 5;
    tdNieParzysta.textContent = "nieparzysta";
    tdNieParzysta.classList.add("nieparzysta");
    tdNieParzysta.onclick = () => setWybor("nieparzysta");

    const tdPuste1 = document.createElement('td');
    tdPuste1.colSpan = 1;
    trParzystaNieParzysta.appendChild(tdParzysta);
    trParzystaNieParzysta.appendChild(tdCzarny);
    trParzystaNieParzysta.appendChild(tdPuste1);
    trParzystaNieParzysta.appendChild(tdCzerwony);
    trParzystaNieParzysta.appendChild(tdNieParzysta);
    tabela.appendChild(trParzystaNieParzysta);
}

function wyborStawka(wartosc) {
    if (!graRozpoczeta) {
        graRozpoczeta = true;
    }
    
    let srodki = getSrodki();  
    if (wartosc > srodki) {  
        showToast("nie masz wystarczających srodków", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }
    zablokujPrzyciski();
    wybranaStawka = Number(wartosc); 
}
function generujKomunikat(wybor) {
    if (wybor === "parzysta") {
        komunikat = "parzystą liczbę";
    } else if (wybor === "nieparzysta") {
        komunikat = "nieparzystą liczbę";
    } else if (wybor === "czerwony") { 
        komunikat = "czerwony kolor";
    } else if (wybor === "czarny") { 
        komunikat = "czarny kolor";
    } else {
        komunikat = "liczbę " + wybor;
    }

    return komunikat;
}


function setWybor(wartosc) {
    if (!graRozpoczeta) {
        showToast("Najpierw wybierz stawkę", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }

    if (wybranaStawka == null) {
        showToast("Najpierw wybierz stawkę", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }

    let srodki = getSrodki();
    if (srodki < wybranaStawka) {
        showToast("Nie masz wystarczających środków", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }

    if (wybor !== null) {
        let komunikat = "Już postawiłeś na " + generujKomunikat(wybor)+". Nie możesz postawić na więcej niż jedną opcję.";
        showToast(komunikat, "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }

    wybor = wartosc;

    srodki -= wybranaStawka;
    setSrodki(srodki);
    updateSrodkiWyswietlane();

    komunikat = "Postawiono " + wybranaStawka + " na "+ generujKomunikat(wybor);
    showToast(komunikat, "linear-gradient(to right, #00b09b, #96c93d)");
}


function sprawdzWyniki() {
    if (!graRozpoczeta) {
        showToast("Najpierw wybierz stawkę i rozpocznij grę!", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }
    
    let wygrana = 0;
    let wynik = `Wynik losowania: ${losSTRING} (${kolor})`;

    // Trafienie liczby
    if(wybor == losSTRING) {
        wygrana = wybranaStawka * 35;
        wynik += `\nTrafiłeś liczbę!`;
    }
    // Trafienie koloru
    else if(wybor == kolor) {
        wygrana = wybranaStawka * 2;
        wynik += `\nTrafiłeś kolor!`;
    }
    // Trafienie parzystości
    else if(losINT % 2 == 0 && wybor == "parzysta") {
        wygrana = wybranaStawka * 2;
        wynik += `\nTrafiłeś parzystą liczbę!`;
    }
    // Trafienie nieparzystości
    else if(losINT % 2 != 0 && wybor == "nieparzysta") {
        wygrana = wybranaStawka * 2;
        wynik += `\nTrafiłeś nieparzystą liczbę!`;
    }
    // Brak trafienia
    else {
        wynik += `\nNie trafiłeś.`;  
    }

    if (wygrana > 0) {
        let srodki = getSrodki();
        srodki += wygrana;
        setSrodki(srodki);
        updateSrodkiWyswietlane();
        wynik += `\nGratulacje! Wygrałeś ${wygrana.toFixed(2)}`;
        showToast(wynik, "linear-gradient(to right, #00b09b, #96c93d)");
    } else {
        showToast(wynik, "linear-gradient(to right, #ff5f6d, #ffc3a0)");
    }

    graRozpoczeta = false;
    wybranaStawka = null;
    wybor = null;
}

