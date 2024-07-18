onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
function showFlowers() {
     document.querySelector('.start-screen').style.animation = 'fadeOut 1s forwards'; // Animación de salida
     setTimeout(() => {
       document.querySelector('.start-screen').style.display = 'none'; // Ocultar pantalla de inicio
       document.querySelector('#flower-container').style.display = 'block'; // Mostrar flores
     }, 500); // Esperar 1 segundo antes de cambiar la pantalla
   }
