/* OPERADORES MULTIPLES
... : El Spread Operator corresponde a un operador el cuál distribuye los elementos de un arreglo u objeto, para asignarlos a alguna variable/constante/función*/
const nodos = [];

for(let i = 0;i < 80; i++){
    const nodo = document.createElement('input');
    nodos.push(nodo);
}

document.body.append(...nodos)