/*const formulario = document.getElementById('form');


formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let email = document.getElementById('txtTipos').value;
    console.log(email)
})*/

/*
Eventos especiales
const checkbox = document.getElementById('activador');
checkbox.addEventListener('change',e =>{
    if(e.target.checked){
        console.log('SOLICITUD');
    }else{
        console.log('NO');
    }
})
*/

const video = document.getElementById('video'),
    btn_play = document.getElementById('play'),
    btn_pausa = document.getElementById('pausa');


btn_play.addEventListener('click',()=>{
    video.play();
})

btn_pausa.addEventListener('click',()=>{
    video.pause();
})
