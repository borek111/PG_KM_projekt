function zmienSrodki(event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony po wysłaniu formularza
    
    // Pobieramy nową wartość środków z formularza
    var noweSrodki = parseFloat(document.getElementById("nowe-srodki").value);

    // Sprawdzamy, czy wartość jest poprawna
    if (isNaN(noweSrodki) || noweSrodki <= 0) {
        alert("Proszę podać poprawną wartość środków.");
        return;
    }
    setSrodki(noweSrodki);
    updateSrodkiWyswietlane();
    showToast("Zmeniono wartość środków.", "linear-gradient(to right, #00b09b, #96c93d)"); 
}

function setSrodki(srodki) {
    sessionStorage.setItem("srodki", srodki.toString());
}

function updateSrodkiWyswietlane() {
    var srodki = getSrodki();
    document.querySelector(".srodki").textContent = `Środki: ${srodki.toFixed(2)}`;
}


function getSrodki() {
    return parseFloat(sessionStorage.getItem("srodki") || "100");
}

if(document.getElementById("zmiana-srodkow-formularz"))
{
    document.getElementById("zmiana-srodkow-formularz").addEventListener("submit", zmienSrodki);
}

document.addEventListener("DOMContentLoaded", function() {
    updateSrodkiWyswietlane(); 
});