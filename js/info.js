function showToast(text, backgroundColor) {
    const toastInstance = Toastify({
        text: text,
        duration: 5000,  
        style: {
            background: backgroundColor
        },
        gravity: "top",  
        position: "center",
        onClick: function () {
            toastInstance.hideToast();
        }
    });
    toastInstance.showToast();
}

function aktualizujHistorieGier() {
    fetch('../php/wyswietl.php')
        .then(response => response.text())
        .then(data => {
            const divFooter = document.getElementById("divFooter");
            divFooter.innerHTML = data; 
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}
