function zmienSrodki(event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony po wysłaniu formularza
    
    // Pobieramy nową wartość środków z formularza
    var noweSrodki = parseInt(document.getElementById("nowe-srodki").value);

    // Sprawdzamy, czy wartość jest poprawna
    if (isNaN(noweSrodki) || noweSrodki <= 0) {
        alert("Proszę podać poprawną wartość środków.");
        return;
    }
    setSrodki(noweSrodki);
    updateSrodkiWyswietlane();
    alert("Dodano");
}

function setSrodki(srodki) {
    sessionStorage.setItem("srodki", srodki.toString());
}

function updateSrodkiWyswietlane() {
    var srodki = getSrodki();
    document.querySelector(".srodki").textContent = `Środki: ${srodki}`;
}

function getSrodki() {
    return parseInt(sessionStorage.getItem("srodki") || "100");
}

if(document.getElementById("zmiana-srodkow-formularz"))
{
    document.getElementById("zmiana-srodkow-formularz").addEventListener("submit", zmienSrodki);
}

document.addEventListener("DOMContentLoaded", function() {
    updateSrodkiWyswietlane(); 
});