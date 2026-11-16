/*==========================================
Para que funcione el modo Oscuro
==========================================*/
const btnModo = document.getElementById('btn-modo');

// 1. Al cargar la página, revisamos si el usuario ya tenía activado el modo oscuro antes
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if (btnModo) btnModo.textContent = '☀️';
}

// 2. Al hacer clic en el botón, alternamos el modo y lo guardamos (si el botón existe en la página actual)
if (btnModo) {
    btnModo.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
     …
