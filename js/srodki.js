function zmienSrodki(event) {
    event.preventDefault(); 
    var noweSrodki = parseFloat(document.getElementById("nowe-srodki").value);
    
    if (isNaN(noweSrodki) || noweSrodki <= 0) {
        showToast("Proszę podać poprawną wartość środków.", "linear-gradient(to right, #ff5f6d, #ffc3a0)");
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
    return +(parseFloat(sessionStorage.getItem("srodki") || "100")).toFixed(2);
}

if(document.getElementById("zmiana-srodkow-formularz"))
{
    document.getElementById("zmiana-srodkow-formularz").addEventListener("submit", zmienSrodki);
}

document.addEventListener("DOMContentLoaded", function() {
    updateSrodkiWyswietlane(); 
});