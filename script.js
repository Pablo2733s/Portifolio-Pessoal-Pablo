const sumarionew = document.getElementById('sumario');
const lista = document.getElementById('lista');

let corOriginalFundo = window.getComputedStyle(lista).getPropertyValue('background-color');
let corOriginalTexto = window.getComputedStyle(lista).getPropertyValue('color');

sumarionew.addEventListener('mouseover', mudaCor);
sumarionew.addEventListener('mouseout', resetarCores);

let cor = 0;

function mudaCor() {
    const novaCor = 'black';
    const texto =  'white';
lista.style.background = novaCor;
lista.style.color = texto;
}

function resetarCores() {
    lista.style.backgroundColor = corOriginalFundo;
    lista.style.color = corOriginalTexto;
}

