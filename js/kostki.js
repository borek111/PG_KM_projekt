let graRozpoczeta = false;
var stawka;
let wynikKostki = 0;
let liczbaRzutow = 0;
var los;
var losSTRING;
var kostka1PNG = document.getElementById("kostka1_png");
var kostka2PNG = document.getElementById("kostka2_png");
var zakresMax1;
var zakresMin1;
var roznica; 
var mnoznik;
var mnoznik_text = document.getElementById("mnoznik");
var szanse_text = document.getElementById("szanse");
var wygrana_text = document.getElementById("wygrana");
var wygrana;
let srodki = getSrodki();


// Suwak z jQuery
$(function() {
    $("#suwak").slider({
        range: true,           
        min: 1,                
        max: 6,                
        values: [1, 6],         
        slide: function(event, ui) {
            aktualizujZakres(ui.values);
            obliczMnoznik(ui.values);  
            obliczSzanse(ui.values);   
        },
        stop: function(event, ui) {
            aktualizujZakres(ui.values);
            obliczMnoznik(ui.values);
            obliczSzanse(ui.values);
        }
    });

    aktualizujZakres($("#suwak").slider("values"));
    obliczMnoznik($("#suwak").slider("values"));
    obliczSzanse($("#suwak").slider("values"));
});

function aktualizujZakres(zakres) {
    const zakresMin = document.getElementById("zakres-min");
    const zakresMax = document.getElementById("zakres-max");

    zakresMin.textContent = zakres[0];
    zakresMax.textContent = zakres[1];

    zakresMin1 = zakres[0];
    zakresMax1 = zakres[1];
}

function startGry() { 
    stawka = parseFloat(document.getElementById("stawka").value);

    if(isNaN(stawka) || stawka <= 0) {
        alert("Proszę podać poprawną stawkę.");
        return;
    }

    if (stawka > srodki) {
        alert("Nie masz wystarczających środków!");
        return;
    }

    mnoznik = 1;
    Losowanie();
    UstawKostke2();
    UstawKostke1();
    sprawdzWynik();

    srodki -= stawka; 
    setSrodki(srodki);  
    updateSrodkiWyswietlane();  
}


function zwrotPieniedzy() {
    stawka = parseFloat(document.getElementById("stawka").value);
    obliczMnoznik();
    wygrana = stawka * mnoznik;
    srodki += wygrana;
    setSrodki(srodki);  
    updateSrodkiWyswietlane();      
}


function getRoznica() {
    roznica = zakresMax1 - zakresMin1;
    return roznica;
}

function obliczMnoznik() {
    getRoznica();
    switch (roznica) {
        case 0: mnoznik = 3; break;
        case 1: mnoznik = 2.5; break;
        case 2: mnoznik = 2; break;
        case 3: mnoznik = 1.5; break;
        case 4: mnoznik = 1.25; break;
        case 5: mnoznik = 1; break;
        default: mnoznik = 1;
 }

    document.getElementById("mnoznik").innerHTML = "Mnożnik:<br>" + mnoznik;
}

function obliczSzanse() {
    getRoznica();

    switch (roznica) {
        case 0: szanse = "16.6%"; break;
        case 1: szanse = "33.3%"; break;
        case 2: szanse = "50%"; break;
        case 3: szanse = "66.6%"; break;
        case 4: szanse = "83.3%"; break;
        case 5: szanse = "100%"; break;
        default: szanse = "100%";
    }

    document.getElementById("szanse").innerHTML = "Szanse:<br>" + szanse;
}

function Losowanie() {
    los = Math.floor(Math.random() * 6) + 1;
    losSTRING = String(los);
}

function UstawKostke1() {
    kostka1PNG.src = "../grafika/kostki/" + losSTRING + ".png";
}

function UstawKostke2() {
    kostka2PNG.src = kostka1PNG.src;
}

function sprawdzWynik() {
    if (los >= zakresMin1 && los <= zakresMax1) {
        zwrotPieniedzy(); 
        wygrana_text.innerHTML = "Ostatnia wygrana: " + wygrana.toFixed(2);
    }
    else
    {
        wygrana_text.innerHTML = "Niestety przegrałeś :(";
    }
}