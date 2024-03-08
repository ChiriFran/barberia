const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const navBtn = document.querySelectorAll('.navBtn');

abrir.addEventListener('click', () => {
    nav.classList.add("navVisible")
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("navVisible")
})

navBtn.forEach( boton => {
    boton.addEventListener('click', () => {
        nav.classList.remove("navVisible")
        document.body.style.overflow = "visible";
    })
});

