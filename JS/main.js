// Objeto Window

console.log(window);

window.alert('Olá Mundo');

alert('Olá Mundo');

/// DOCUMENT ()

// Alterar o título
document.title = 'DOM';

// //Criar um elemento <h1>
let heading = document.createElement('H1'); // Criando o H1
heading.innerHTML = 'Olá Alunos!'; // Colocando um texto no H1
document.body.appendChild(heading); // informando q h1 vai ser filho do BODY
heading.style.borderBottom = 'solid 3px #ccc' // Colocando bordar 

let div = document.createElement('div');
div.innerText = 'Mundo dos trouxas!';
document.body.appendChild(div);
div.style.backgroundColor = '#f1c2c5';


let b = document.createElement('Button');
b.innerHTML = 'Aceitar';
document.body.appendChild(b);
b.style.marginTop = '2rem';
b.style.backgroundColor = '#c5f5b9';

let p = document.createElement('p');
p.innerHTML = 'Estamos entendendo o DOM';
document.body.appendChild(p);
p.style.color = '#f2ccbb'

// =================================================================================

/** A única diferença entre innerText e innerHTML é que innerText 
 * insira a string como está no elemento, enquanto a innerHTML executa
 *  como conteúdo html. */


/**⦁	Método getElementById
O método getElementById é o modo para comum de acessar um elemento HTML na página web.
 Esse método retorna a referência do elemento através do atributo ID ou null se a ID não for encontrada. Esse é um dos motivos do atributo id em uma página web ser único.
Observe no arquivo index.html, que colocamos o atributo id na marcação <h2>.
 */

let titulo = document.getElementById('titulo');

//Alterando o conteúdo do elemento.
titulo.innerHTML = 'Olá meus caros alunos!';

//Configurando o estilo CSS do elemento.
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#ccccc9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

/**⦁	Método getElementsByClassName
O método getElementsByClassName retorna a coleção de todos os 
elementos do documento com a classe específica. Isso significa que 
esse método pode retornar mais de um elemento.
 */

// Método getElementsByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[0]);
items[0].textContent = 'Hello 2';
items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'yellow';

//Utilizando o laço de repetição  For para alterar todo o elemento do html

// for(let i = 1; i <items.length; i++){
//     items[i].style.backgroundColor = '#f5f599';
// }

/**⦁	Método getElementsByTagName
O método getElementsByTagName retorna a coleção de todos os elementos do 
documento com a tag, ou seja, com a mesma marcação HTML. Isso significa que esse 
método pode retornar mais de um elemento.
 */
// Método getElementsByTagName
let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
    else li[i].style.backgroundColor = '#f2f2';
}


/**⦁	Método getElementsByName
O método getElementsByName retorna a coleção de todos os 
elementos do documento com o nome específico, ou seja, esse método 
verifica o atributo HTML name. Isso significa que esse método pode retornar
 mais de um elemento.
 */

// Método getElementsByName
let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = '#BAC1FB';


//Remover elemento no DOM
let item2 = document.getElementById('item2');
item2.remove()

