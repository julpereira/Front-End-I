const itensMenu = [
    { nome: 'Início', url: 'index.html'},
    { nome: 'Sobre', url: 'sobre.html'},
    { nome: 'Conato', url:'contato.html'}
];


const body = document.createElement('header');
const header = document.createElement('nav');
const nav = document.createElement('ul');

itensMenu.forEach(item => {
    item.nome
})

const inicio = document.createElement('li');
const sobre = document.createElement('li');
const contato = document.createElement('li');

inicio.textContent = 'Início';
sobre.textContent = 'Sobre';
contato.textContent = 'Contato';