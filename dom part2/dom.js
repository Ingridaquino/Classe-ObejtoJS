// Método querySelector

let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA'

//Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML = 'Mudei o texto aqui');

//Busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

//Função chamada pelo evendo onclick
const Clique = () =>{
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';
};


//Método querySelectorAll
let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px solid #0000FF';
    listaLi[i].style.padding = '3px';
}
//console.log(listaLi);


// Busca por id
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => {
    li.innerHTML = 'Mudou aqui!'
    li.style.backgroundColor = '#CEFBBA';
}
);


// Busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));

// Busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));



/// formulário

// Método querySelector
const btn = document.querySelector('.botao');
btn.style.background = 'red';

// Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');


// Método addEventListener
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${horario.value}`
            )
        );
        userList.appendChild(li);
        // Limpa o formulário
        nameInput.value = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus(); //Coloca o foco no elmento
    }
}


// Validando e-mail
emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        // alert('Por favor, insira um e-mail válido.');
        msg_email.classList.add('error');
        msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
        setTimeout(() => msg.remove(), 3000);
    }
});
