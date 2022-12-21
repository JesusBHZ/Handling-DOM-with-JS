/*
----------- EVENTOS DEL TECLADO -----------
keydown: El evento ocurre al presionar una tecla
*/
function a(e){
    console.log('Tecla: '+ e.key);
}
const entrada = document.getElementById('input');
entrada.addEventListener('keydown',a);