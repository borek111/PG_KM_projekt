let graRozpoczeta = false;
var stawka;
let wynikKostki = 0;
let liczbaRzutow = 0;
var los;
var losSTRING;
var kostka1PNG=document.getElementById("kostka1_png");
var kostka2PNG=document.getElementById("kostka2_png");
var zakresMax1;
var zakresMin1;
var roznica; 
var mnoznik;
var mnoznik_text = document.getElementById("mnoznik");
var szanse_text = document.getElementById("szanse");
var wygrana_text = document.getElementById("wygrana");
var wygrana;

//suwak z jquery
$(function() {
    $("#suwak").slider({
        range: true,           
        min: 1,                
        max: 6,                
        values: [1, 6],         
        slide: function(event, ui) {
            aktualizujZakres(ui.values);
            //obliczMnoznik(); to do zeby byl aktualny zakres a nie -1 
        },
        stop: function(event, ui) {
            aktualizujZakres(ui.values); 
            obliczMnoznik();
            obliczSzanse();
            
        }
    });

    aktualizujZakres($("#suwak").slider("values"));
});


function aktualizujZakres(zakres) {
    const zakresMin = document.getElementById("zakres-min");
    zakresMin1=zakresMin.textContent;
    const zakresMax = document.getElementById("zakres-max");
    zakresMax1=zakresMax.textContent;

    // Ustawianie wartości minimalnej i maksymalnej
    zakresMin.textContent = zakres[0];
    zakresMax.textContent = zakres[1];
}

function startGry() {
    // if (graRozpoczeta) {
    //     return;
    // }
    mnoznik = 1;
    aktualizujZakres($("#suwak").slider("values"));
    Losowanie();
    UstawKostke2();
    UstawKostke1();
    sprawdzWynik();
    stawka = parseInt(document.getElementById("stawka").value);

    if (isNaN(stawka) || stawka <= 0) {
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

    //graRozpoczeta = true;
    liczbaRzutow = 0; 

    
    // document.querySelector('button[type="submit"]').disabled = true;

    
}

function zwrotPieniedzy() {
    // if (!graRozpoczeta) {
    //     alert("Gra nie została rozpoczęta.");
    //     return;
    // }
    obliczMnoznik();
    stawka = parseInt(document.getElementById("stawka").value);
    console.log("stawka"+stawka);
    console.log("mno"+mnoznik);
    let srodki = getSrodki();
    wygrana = stawka * mnoznik;
    srodki += (stawka * mnoznik);
    setSrodki(srodki); 
    updateSrodkiWyswietlane();
   
}

function getRoznica()
{
    roznica = zakresMax1 - zakresMin1;
    return roznica;
}

function obliczMnoznik()
{
    getRoznica();
    switch (roznica) {
        case 0:
            mnoznik = 3;
            mnoznik_text.innerHTML = "Mnożnik:<br>"+mnoznik;
            break;
        case 1:
            mnoznik = 2.5;
            mnoznik_text.innerHTML = "Mnożnik:<br>"+ mnoznik;
            break;
        case 2:
            mnoznik = 2;
            mnoznik_text.innerHTML = "Mnożnik:<br>"+ mnoznik;
            break;
        case 3:
            mnoznik = 1.5;
            mnoznik_text.innerHTML = "Mnożnik:<br>"+mnoznik;
            break;
        case 4:
            mnoznik = 1.25;
            mnoznik_text.innerHTML = "Mnożnik:<br>"+ mnoznik;
            break;
        case 5:
            mnoznik = 1;
            mnoznik_text.innerHTML =  "Mnożnik:<br>"+mnoznik;
            break
        default:
            mnoznik = 1;
            mnoznik_text.innerHTML =  "Mnożnik:<br>"+mnoznik;
      }
}

function obliczSzanse()
{
    getRoznica();
    switch (roznica) {
        case 0:
            szanse_text.innerHTML = "Szanse:<br>" + 16.6 + "%";
            break;
        case 1:
            szanse_text.innerHTML = "Szanse:<br> " + 33.3 + "%";
            break;
        case 2:
            szanse_text.innerHTML = "Szanse:<br> " + 50 + "%";
            break;
        case 3:
            szanse_text.innerHTML = "Szanse:<br> " + 66.6 + "%";
            break;
        case 4:
            szanse_text.innerHTML = "Szanse:<br> " + 83.6 + "%";
            break;
        case 5:
            szanse_text.innerHTML = "Szanse:<br> " + 100 + "%";
            break
        default:
            szanse_text.innerHTML = "Szanse:<br> " + 100 + "%";
      }
}

function Losowanie(){
    los=Math.floor(Math.random() * 6)+1;
    losSTRING = String(los);
}
function UstawKostke1(){
    kostka1PNG.src="../grafika/kostki/"+losSTRING+".png";
}
function UstawKostke2(){
    kostka2PNG.src=kostka1PNG.src;
}


function sprawdzWynik(){
    console.log(zakresMin1, zakresMax1);
    console.log(los);
    if(los>=zakresMin1&&los<=zakresMax1)
    {
        zwrotPieniedzy(); 
        wygrana_text.innerHTML = "Ostatnia wygrana: "+ wygrana.toFixed(2);
    }
    else
    {
        wygrana_text.innerHTML = "Niestety przegrałeś :(";
    }

}