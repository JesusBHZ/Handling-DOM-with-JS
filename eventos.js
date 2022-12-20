/* Eventos: Son la forma de controlar acciones en nuestra pagina web 

const enviar = document.getElementById('mensaje');

function mensaje1(){
    console.log('mensaje enviado');
}


function mensaje2(){
    console.log('mensaje enviado');
}
*/

/*------------- Parte 2 ------------- 
nodo.addEventListener : Registra un evento a un nodo en especifico
*/
const enviar = document.getElementById('enviarr');
const evento = () =>{
    console.log('NUMERO DE CLIKS: ')
}

enviar.addEventListener('click',evento);

const nombre = document.getElementById('txtTipos');

const evento2 = () =>{
    console.log('NUMERO DE LETRAS: ')
}

nombre.addEventListener('input',evento2);

/* nodo.removeEventListener : Metodo que elimina un controlador de eventos */

nombre.removeEventListener('input',evento2);

enviar.removeEventListener('click',evento);

const evento3 = function action(){
    console.log('NUMERO DE ENVIOS')
}

enviar.addEventListener('click',evento3);

