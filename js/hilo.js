let graRozpoczeta = false; 
let stawka = 0; 
let kwotaZwrotu = 0; 
var losINT;
var losSTRING;
var kartaPNG=document.getElementById("kartaPNG");

const kolory = {
  "karo":["2","3"] //to do    
};


function startGry() {
    if (graRozpoczeta) {
        return; 
    }
    Losowanie()
    stawka = parseFloat(document.getElementById("stawka").value);

    if (isNaN(stawka) || stawka <= 0 ) {
        alert("Proszę podać poprawną stawkę.");
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

    graRozpoczeta = true;
    kwotaZwrotu = stawka; 

    //document.querySelector('button[type="submit"]').disabled = true;

    document.getElementById("kwota-zwrotu").textContent = kwotaZwrotu.toFixed(2);
}

function Losowanie() {
    losINT = Math.floor(Math.random() * 37);
    losSTRING = String(losINT);
}
function ustawKarte(){
    kartaPNG.src="../grafika/karty/"+losSTRING+".png";
}
