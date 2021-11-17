//Buscando pelos elementos do formulário

const form = document.querySelector('#my-form');
const nome = document.querySelector('#nome');
const date = document.querySelector('#dateDeNascimento');
const userLista = document.querySelector('#users');
const itemDelete = document.querySelector('.item')
const msg = document.querySelector('.msg');
const dateMsg = document.querySelector('.date-msg')

form.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();
if(nome.value === '' || date.value === '')
    console.log(nome.value);
}


