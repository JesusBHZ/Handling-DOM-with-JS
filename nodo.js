/*
// Obtener un elemento por su ID
document.getElementById('id');

// Para obtener un elemto por el nombre de la etiqueta
document.getElementsByTagName('name');

// Para obtener un elemento por el nombre de una clase
document.getElementsByClassName('class');
*/

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

/*
// Crear nodos 
const padre = document.querySelector('section.contenedor'); // Nodo padre donde estara el nodo nuevo
console.log(padre)

// Creacion de un h2 con el texto: JS, sera el ultimo elemento del padre
const nuevo_nodo = document.createElement('h2');
padre.appendChild(nuevo_nodo)
const texto = document.createTextNode('JS');
nuevo_nodo.appendChild(texto);


// Creacion de un p con el texto: modelos nuevos, sera el ultimo elemento del padre (debajo del h2)
padre.append('modelos nuevos', document.createElement('p'));


// creacion de un nuevo nodo h2 con el texto: Nodo, SE CREARA ANTES DE LA TABLA, NOSOTROS SELECCIONAMOS DONDE SEA CREA ANTES DE UN ELEMENTO
const nuevo = document.createElement('h2');
const limite = document.querySelector('table.tabla');
console.log(limite);
padre.insertBefore(nuevo,limite);
const texto2 = document.createTextNode('Nodo');
nuevo.appendChild(texto2);
*/

/*
before: antes de
after: después
*/
/*
Creaion de nodos donde queramos 
const ndo = document.createElement('h3');
//limite.insertAdjacentElement("beforebegin",ndo);
limite.insertAdjacentElement("afterbegin",ndo);
//limite.insertAdjacentElement("beforeend",ndo);
//limite.insertAdjacentElement("afterend",ndo);
const texto3 = document.createTextNode('aqui');
ndo.appendChild(texto3);
*/
