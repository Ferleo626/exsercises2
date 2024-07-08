document.getElementById('title').innerHTML = 'Frutas';

const elementos = document.querySelectorAll('.colorN');
elementos.forEach(elemento => {
    elemento.style.backgroundColor = 'orange';
});

document.getElementsByClassName('copy')[0].innerHTML = 'Conhort 55 © Fernando Patiño';

const mainElement = document.querySelector('main'); 

const nuevoDiv = document.createElement('div');
nuevoDiv.id = 'contenedor'; 
mainElement.appendChild(nuevoDiv); 

const divCapturado = document.getElementById('contenedor');
console.log(divCapturado);


function crearCard(nombre, foto, descripcion) {
    return `
        <div class="card">
            <img src="${foto}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
        </div>
    `;
}


function generarCards(frutas) {
    const cards = frutas.map(fruta => crearCard(fruta.nombre, fruta.foto, fruta.descripcion));
    return cards.join('');
}


contenedor.innerHTML = generarCards(frutas);


const nuevoDivLista = document.createElement('div');
nuevoDivLista.id = 'lista';
nuevoDivLista.innerHTML = '<h2>Frutas Dulces</h2>';
mainElement.appendChild(nuevoDivLista);


function crearListaDesordenada(frutas) {
    const ul = document.createElement('ul');
    frutas.forEach(fruta => {
        const li = document.createElement('li');
        li.textContent = fruta.nombre;
        ul.appendChild(li);
    });
    return ul;
}


const frutasDulces = frutas.filter(fruta => fruta.esDulce);


const listaDesordenada = crearListaDesordenada(frutasDulces);
document.getElementById('lista').appendChild(listaDesordenada);















