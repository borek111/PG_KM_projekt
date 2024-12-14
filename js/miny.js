let graRozpoczeta = false; 
let stawka = 0; 
let kwotaZwrotu = 0; 
let odkrytePola = 0; 
let moznaMnozyc = false; 
let liczbaMin = 0; 

// Funkcja uruchamiająca grę
function startGry() {
    if (graRozpoczeta) {
        return; 
    }

    stawka = parseInt(document.getElementById("stawka").value);
    const miny = parseInt(document.getElementById("miny").value);

    if (isNaN(stawka) || stawka <= 0 || isNaN(miny) || miny <= 0 || miny > 24) {
        alert("Proszę podać poprawną stawkę i ilość min (1-24).");
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

    rozstawMiny(miny);
    graRozpoczeta = true;
    kwotaZwrotu = stawka; 
    odkrytePola = 0; 
    moznaMnozyc = false; 
    liczbaMin = miny; 

    document.querySelector('button[type="submit"]').disabled = true;

    document.getElementById("kwota-zwrotu").textContent = kwotaZwrotu.toFixed(2);
}

function getMnoznik() {
    return 1 + liczbaMin * 0.05; 
}

// Funkcja do odkrywania pola
function odkryjPole(index) {
    if (!graRozpoczeta) {
        alert("Proszę rozpocząć grę przed kliknięciem na pola.");
        return;
    }

    const pole = document.getElementById(`pole-${index}`);

    if (pole.classList.contains('odkryte')) {
        return; 
    }

    const maMina = pole.dataset.maMina === "true";

    pole.classList.add('odkryte');

    if (maMina) {
        pole.style.backgroundImage ="url('../grafika/miny/bomba.png')";
        pole.style.backgroundSize = "75px";
        pole.style.backgroundRepeat = "no-repeat";
        pole.style.backgroundPosition = "center";
        alert("Boom! Trafiłeś na minę!");
        pokazMiny();
        koniecGry();
    } else {
        pole.style.backgroundImage = "url('../grafika/miny/znaczek.png')";
        pole.style.backgroundSize = "75px";
        pole.style.backgroundRepeat = "no-repeat";
        pole.style.backgroundPosition = "center";
        odkrytePola++;

        if (odkrytePola > 0 && !moznaMnozyc) {
            moznaMnozyc = true;
        }

        if (moznaMnozyc) {
            const mnoznik = getMnoznik();
            kwotaZwrotu *= 1.1 * mnoznik; // Uwzględniamy liczbę min przy każdym kroku
            document.getElementById("kwota-zwrotu").textContent = kwotaZwrotu.toFixed(2);
        }
    }
}

// Funkcja zwrotu pieniędzy
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

function rozstawMiny(miny) {
    const pola = document.querySelectorAll('.siatka div');
    pola.forEach(pole => {
        pole.style.backgroundImage = '';  
        pole.classList.remove('odkryte'); 
        delete pole.dataset.maMina;       
        pole.setAttribute('onclick', `odkryjPole(${pole.id.split('-')[1]})`);
    });

    let minyRozstawione = 0;
    liczbaMin = miny;
    while (minyRozstawione < miny) {
        const index = Math.floor(Math.random() * 25);
        const pole = document.getElementById(`pole-${index}`);

        if (!pole.dataset.maMina) {
            pole.dataset.maMina = "true"; 
            minyRozstawione++;
        }
    }
}

function pokazMiny() {
    const pola = document.querySelectorAll('.siatka div');
    for (let i = 0; i < pola.length; i++) {
        const pole = pola[i];
        if (pole.dataset.maMina === "true") {
            pole.style.backgroundImage = "url('../grafika/miny/bomba.png')";
            pole.style.backgroundSize = "75px";
            pole.style.backgroundRepeat = "no-repeat";
            pole.style.backgroundPosition = "center";
        }
    }
}

function koniecGry() {
    const pola = document.querySelectorAll('.siatka div');
    pola.forEach(pole => {
        pole.removeAttribute("onclick"); 
    });
    graRozpoczeta = false; 

    document.querySelector('button[type="submit"]').disabled = false;

}

function dodajPola() {
    const siatka = document.getElementById('siatka');
    for (let i = 0; i < 25; i++) {
        const pole = document.createElement('div');
        pole.id = `pole-${i}`;
        pole.classList.add('pole');
        pole.setAttribute('onclick', `odkryjPole(${i})`);
        siatka.appendChild(pole);
    }
}

document.addEventListener("DOMContentLoaded", dodajPola);
