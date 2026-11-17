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
            btnModo.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            btnModo.textContent = '🌙';
        }
    });
}

/*==========================================
Para que funcione el formulario
==========================================*/
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    const inputNombre = document.querySelector("#nombre");
    const inputApellido = document.querySelector("#apellido");
    const inputEmail = document.querySelector("#email");
    const divAlerta = document.querySelector("#mensaje-alerta");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            // Frenamos el envío por defecto para validar nosotros
            evento.preventDefault();

            // Obtenemos los valores y limpiamos espacios vacíos con .trim()
            const valorNombre = inputNombre ? inputNombre.value.trim() : "";
            const valorApellido = inputApellido ? inputApellido.value.trim() : "";
            const valorEmail = inputEmail ? inputEmail.value.trim() : "";

            // Validamos si alguno de los obligatorios está vacío
            if (valorNombre === "" || valorApellido === "" || valorEmail === "") {
                divAlerta.textContent = "Por favor, completa todos los campos obligatorios antes de enviar.";
                divAlerta.className = "alert alert-danger mt-3"; // Alerta roja de Bootstrap
            } else {
                divAlerta.textContent = "¡Mensaje enviado con éxito!";
                divAlerta.className = "alert alert-success mt-3"; // Alerta verde de Bootstrap
                
                // Limpiamos el formulario después de enviarlo con éxito
                formulario.reset();
            }
        });
    }
});