const karty = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const kolory = ["kier", "karo", "trefl", "pik"];

function LosowanieKarty() {
    const kartaIndex = Math.floor(Math.random() * karty.length);
    const kolorIndex = Math.floor(Math.random() * kolory.length);
    return { karta: karty[kartaIndex], kolor: kolory[kolorIndex], index: kartaIndex };
}

function odswiezSzanse(wylosowanaKartaIndex) {
    const szansaNizsza = ((wylosowanaKartaIndex + 1) / karty.length * 100).toFixed(2);
    const szansaWyzsza = ((karty.length - wylosowanaKartaIndex) / karty.length * 100).toFixed(2);
    document.getElementById("zysk_wyzsza").innerHTML = `Szansa na wyższą: <br>${szansaWyzsza}%`;
    document.getElementById("zysk_nizsza").innerHTML =`Szansa na niższą: <br>${szansaNizsza}%`;
}

function obliczMnoznik(szansa) {
    return (100 / szansa).toFixed(2);
}

let wylosowanaKarta = LosowanieKarty();
document.getElementById("kartaText").innerHTML = `${wylosowanaKarta.karta}  ${wylosowanaKarta.kolor}`;
odswiezSzanse(wylosowanaKarta.index);

var stawka=0;
var graRozpoczeta=false;

function startGry(){
    if (graRozpoczeta) {
        return; 
    }

    stawka = parseInt(document.getElementById("stawka").value);
    if (isNaN(stawka) || stawka <= 0) {
        alert("Proszę podać poprawną stawkę ");
        return;
    }

    let srodki = getSrodki();
    if (stawka > srodki) {
        alert("Nie masz wystarczających środków!");
        return;
    }

    srodki -= stawka;
    setSrodki(srodki);
    updateSrodkiWyswietlane();
    
    graRozpoczeta=true;
}
function wybor(wybor) {
    
    const nastepnaKarta = LosowanieKarty();

    const wylosowanaKartaWartosc = wylosowanaKarta.index;
    const nastepnaKartaWartosc = nastepnaKarta.index;

    const szansaNizsza = ((wylosowanaKarta + 1) / karty.length * 100).toFixed(2);
    const szansaWyzsza = ((karty.length - wylosowanaKarta) / karty.length * 100).toFixed(2);



    if (wybor === "WyzszaRowna") {
        mnoznik = obliczMnoznik(szansaWyzsza);
    } else if (wybor === "NizszaRowna") {
        mnoznik = obliczMnoznik(szansaNizsza);
    }

    var wynik;
    if (
        (wybor === "WyzszaRowna" && nastepnaKartaWartosc >= wylosowanaKartaWartosc) ||
        (wybor === "NizszaRowna" && nastepnaKartaWartosc <= wylosowanaKartaWartosc)
    ) {
        wynik = "Trafiłeś";
    } else {
        wynik = "Nie trafiłeś";
    }

    document.getElementById("wynik").innerHTML = wynik;
    wylosowanaKarta = nastepnaKarta;
    document.getElementById("kartaText").innerHTML = `${wylosowanaKarta.karta} ${wylosowanaKarta.kolor}`;
    odswiezSzanse(wylosowanaKarta.index);
}
    
   

function pominKarte() {
    wylosowanaKarta = LosowanieKarty();
    document.getElementById("kartaText").innerHTML = `${wylosowanaKarta.karta} ${wylosowanaKarta.kolor}`;
    document.getElementById("wynik").innerHTML = "Pominąłeś kartę";
    odswiezSzanse(wylosowanaKarta.index);
}

function zwrotPieniedzy() {
    if (!graRozpoczeta) {
        alert("Gra nie została rozpoczęta. Nie możesz zwrócić pieniędzy.");
        return;
    }

    let srodki = getSrodki();
    srodki += kwotaZwrotu;
    setSrodki(srodki); 
    updateSrodkiDisplay(); 
    alert(`Zwrócono pieniądze! Kwota: ${kwotaZwrotu.toFixed(2)} zł`);
    koniecGry(); 
}