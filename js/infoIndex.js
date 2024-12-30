function aktualizujHistorieGier() {
    fetch('php/wyswietl.php')
        .then(response => response.text())
        .then(data => {
            const divFooter = document.getElementById("divFooter");
            divFooter.innerHTML = data; 
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}
