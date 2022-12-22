/* DOOM TRAVERSING
Recorre el DOM

children: Regresa SOLO elementos
childNodes: Regresa TODOS los nodos hijos

*/

const padre = document.getElementById('padre');
//console.log(padre.childNodes);

/*
firstChild: Regresa el priemr nodo
firstElementChild: REgresa el primer elemento
 */

// console.log(padre.firstElementChild);
// console.log(padre.lastChild);

/*
nextSibling: Regresa el nodo inmediatamente despues del nodo especificado
nextElementSibling: Regresa un elemento inmediatamente posterior al especificado
 */
const nieto = document.getElementById('nietodos');
// console.log(nieto.nextElementSibling);


/*
previousSibling: Regresa el nodo inmediatamente antes del nodo especificado
previousElementSibling: Regresa un elemento inmediatamente antes al especificado
 */
// console.log(nieto.previousElementSibling);

/*
parentElement: Regresa el elemento padre
*/
console.log(nieto.parentElement);

