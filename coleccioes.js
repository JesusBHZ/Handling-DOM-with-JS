/*NodelIst: Coleccion de nodos NO ES UN ARRAY */

const lista_nodos = document.querySelectorAll('img');
console.log(lista_nodos.length)

/*HTMLColletion: Coleion de elementos HTML */

const coleccion = document.getElementsByTagName('h1');
console.log(coleccion);
coleccion.length;

const array = [...lista_nodos];
console.log(array);

const array2 = Array.from(document.querySelectorAll('img'));

