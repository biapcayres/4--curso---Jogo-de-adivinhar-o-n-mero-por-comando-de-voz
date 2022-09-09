const numero_maior = 1000;
const numero_menor = 1;
const numero_secreto = sortear_numero ();

function sortear_numero () {
    return parseInt(Math.random() * numero_maior + 1); // retorna numeros aleatorios inteiros de 0 a 100
}

console.log(numero_secreto);

const elemento_maior = document.querySelector('#numero_maior');
elemento_maior.innerHTML = numero_maior;

const elemento_menor = document.querySelector('#numero_menor');
elemento_menor.innerHTML = numero_menor;
