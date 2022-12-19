const nuevo = document.createElement('a');
nuevo.className = "clase";
nuevo.id = "nuevoid";

nuevo.setAttribute('href','#');
nuevo.textContent = 'nuevo Elemento';

const padre = document.querySelector('section.contenedor');
padre.appendChild(nuevo);