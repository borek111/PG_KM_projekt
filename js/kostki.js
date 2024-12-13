let graRozpoczeta = false;
let stawka = 0;
let kwotaZwrotu = 0;
let wynikKostki = 0;
let liczbaRzutow = 0;

//suwak z jquery
$(function() {
    $("#suwak").slider({
        range: true,           
        min: 1,                
        max: 6,                
        values: [2, 8],         
        slide: function(event, ui) {
            aktualizujZakres(ui.values); 
        },
        stop: function(event, ui) {
            aktualizujZakres(ui.values); 
        }
    });

    aktualizujZakres($("#suwak").slider("values"));
});


function aktualizujZakres(zakres) {
    const zakresMin = document.getElementById("zakres-min");
    const zakresMax = document.getElementById("zakres-max");

    // Ustawianie wartości minimalnej i maksymalnej
    zakresMin.textContent = zakres[0];
    zakresMax.textContent = zakres[1];
}

function startGry() {
    if (graRozpoczeta) {
        return;
    }

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

    graRozpoczeta = true;
    kwotaZwrotu = stawka; 
    liczbaRzutow = 0; 

    
    document.querySelector('button[type="submit"]').disabled = true;


    //rzutKostka();
    alert("Gra rozpoczęta! Powodzenia!");
}

function rzutKostka() {
    if (!graRozpoczeta) {
        alert("Proszę rozpocząć grę przed rzutem kostką.");
        return;
    }

}

function koniecGry() {
    graRozpoczeta = false; 
    document.querySelector('button[type="submit"]').disabled = false;
}

function zwrotPieniedzy() {
    if (!graRozpoczeta) {
        alert("Gra nie została rozpoczęta.");
        return;
    }

    let srodki = getSrodki();
    srodki += kwotaZwrotu;
    setSrodki(srodki); 
    updateSrodkiWyswietlane();

    alert(`Zwrócono pieniądze! Kwota: ${kwotaZwrotu.toFixed(2)} zł`);
    koniecGry();
}
