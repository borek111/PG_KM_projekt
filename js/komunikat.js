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
