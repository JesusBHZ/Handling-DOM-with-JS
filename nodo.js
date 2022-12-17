// Obtener un elemento por su ID
document.getElementById('id');

// Para obtener un elemto por el nombre de la etiqueta
document.getElementsByTagName('name');

// Para obtener un elemento por el nombre de una clase
document.getElementsByClassName('class');


// ¿por que no usar querySelector? 
/* Con querySelector tenemos que ser especificos con el nodo a obtener,
usando la escirtura de CSS para aceder a:
                                # id
                                . class
example:
elemento = document.querySelector('#titulo');  // el elemento con el ID 'titulo'
 document.querySelector('#titulo') : solo uno
 document.querySelectorAll('#titulo') : todos


*/