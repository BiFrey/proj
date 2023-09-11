let modal = document.getElementById("modal")
let open = document.getElementById('open')
let close = document.getElementById('close')

open.addEventListener("click", function () {
    modal.style.display = "block"; 
});

close.addEventListener("click", function () {
    modal.style.display = "none"; 
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
});
