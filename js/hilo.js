const karty = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const kolory = ["kier", "karo", "trefl", "pik"];
const historiaKart = []; 
const maxHistoria = 5; 
const historiaKartDiv = document.querySelector('.historia_kart_div1');
var karta=document.getElementById("karta");
var stawka=0;
var graRozpoczeta=false;
let wylosowanaKarta = LosowanieKarty();
var mnoznik=0;
var kwotaZwrotu=0;
var kwotaZwrotuText=document.getElementById("kwota-zwrotu");


function aktualizujHistorieKart(karta) {
    historiaKart.unshift(karta);

    if (historiaKart.length > maxHistoria) {
        historiaKart.pop();
    }
    historiaKartDiv.innerHTML = '';

    historiaKart.forEach((karta) => {
        const kartaElement = document.createElement('div');
        kartaElement.classList.add('karta-historia');
        kartaElement.innerHTML = `<img src="../grafika/karty/${karta.karta}${karta.kolor}.png" alt="${karta.karta} ${karta.kolor}">`;
        historiaKartDiv.appendChild(kartaElement);
    });
}

function LosowanieKarty() {
    const kartaIndex = Math.floor(Math.random() * karty.length);
    const kolorIndex = Math.floor(Math.random() * kolory.length);
    const nowaKarta = { karta: karty[kartaIndex], kolor: kolory[kolorIndex], index: kartaIndex };

    aktualizujHistorieKart(nowaKarta);

    return nowaKarta;
}

function odswiezSzanse(wylosowanaKartaIndex) {
    const szansaNizsza = ((wylosowanaKartaIndex + 1) / karty.length * 100).toFixed(2);
    const szansaWyzsza = ((karty.length - wylosowanaKartaIndex) / karty.length * 100).toFixed(2);
    document.getElementById("zysk_wyzsza").innerHTML = `Szansa na wyższą: <br>${szansaWyzsza}%`;
    document.getElementById("zysk_nizsza").innerHTML =`Szansa na niższą: <br>${szansaNizsza}%`;
}

function obliczMnoznik(szansa) {
    if(szansa!=100.00) return (100 / szansa).toFixed(2);
    else return 1;
}

karta.src="../grafika/karty/"+wylosowanaKarta.karta+wylosowanaKarta.kolor+".png";
odswiezSzanse(wylosowanaKarta.index);


function startGry(){
    if (graRozpoczeta) {
        return; 
    }

    stawka = parseFloat(document.getElementById("stawka").value);
    if (isNaN(stawka) || stawka <= 0) {
        showToast("Proszę podać poprawną stawkę", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }

    let srodki = getSrodki();
    if (stawka > srodki) {
        showToast("Nie masz wystarczających środków!", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }

    srodki -= stawka;
    setSrodki(srodki);
    updateSrodkiWyswietlane();
    kwotaZwrotuText.innerHTML=stawka;
    kwotaZwrotu=stawka;
    graRozpoczeta=true;
}


function wybor(wybor) {
    if(graRozpoczeta==false)
    {
        showToast("Wybierz Stawkę", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }

    const nastepnaKarta = LosowanieKarty();
    karta.src="../grafika/karty/"+nastepnaKarta.karta+nastepnaKarta.kolor+".png";
    const wylosowanaKartaWartosc = wylosowanaKarta.index;
    const nastepnaKartaWartosc = nastepnaKarta.index;

    const szansaNizsza = ((wylosowanaKartaWartosc + 1) / karty.length * 100).toFixed(2);
    const szansaWyzsza = ((karty.length - wylosowanaKartaWartosc) / karty.length * 100).toFixed(2);

    if (wybor === "WyzszaRowna") {
        mnoznik = parseFloat(obliczMnoznik(szansaWyzsza));
    } else if (wybor === "NizszaRowna") {
        mnoznik = obliczMnoznik(szansaNizsza);
    }

    var wynik;
    if (
        (wybor === "WyzszaRowna" && nastepnaKartaWartosc >= wylosowanaKartaWartosc) ||
        (wybor === "NizszaRowna" && nastepnaKartaWartosc <= wylosowanaKartaWartosc)
    ) {
        wynik = "Trafiłeś";
        kwotaZwrotu=(kwotaZwrotu*mnoznik).toFixed(2);
        kwotaZwrotuText.innerHTML=kwotaZwrotu;
    } else {
        wynik = "Nie trafiłeś";
        kwotaZwrotu=0;
        kwotaZwrotuText.innerHTML="Przegrałeś";
        graRozpoczeta=false;
    }

    document.getElementById("wynik").innerHTML = wynik;
    wylosowanaKarta = nastepnaKarta;
    odswiezSzanse(wylosowanaKarta.index);
}
    
   

function pominKarte() {
    if(graRozpoczeta==false)
    {
        showToast("Wybierz Stawkę", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }
    wylosowanaKarta = LosowanieKarty();
    karta.src="../grafika/karty/"+wylosowanaKarta.karta+wylosowanaKarta.kolor+".png";
    document.getElementById("wynik").innerHTML = "Pominąłeś kartę";
    odswiezSzanse(wylosowanaKarta.index);
}

function zwrotPieniedzy() {
    if (!graRozpoczeta) {
        showToast("Gra nie została rozpoczęta. Nie możesz zwrócić pieniędzy.", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
        return;
    }
    graRozpoczeta=false;
    let srodki = getSrodki();
    srodki += parseFloat(kwotaZwrotu);
    setSrodki(srodki); 
    updateSrodkiWyswietlane(); 
    showToast(("Zwrócono pieniądze! Kwota: " + kwotaZwrotu), "linear-gradient(to right, #00b09b, #96c93d)");
}