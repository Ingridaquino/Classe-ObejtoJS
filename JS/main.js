//Classe em JS

class Carro{
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
}


// Instanciando Objetos a classe
let meuCarro1 = new Carro('Fusca', 1997); //Sempre seguir a sequencia 
let meuCarro2 = new Carro('Sena', 2008);


//Imprimindo as informações
console.log(meuCarro1);
console.log('Carro: ', meuCarro1.nome);
console.log('Ano: ', meuCarro1.ano);

console.log('')

console.log(meuCarro2);
console.log('Carro: ', meuCarro2.nome);
console.log('Ano: ', meuCarro2.ano);

//Nova classe com mais de um metodo
class novoCarro{
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }

    idadeCarro(ano){
        return ano - this.ano; // ano do carro - ano atual = (Idade do carro)
    }
}


/**getFullYear - busca o ano atual
 * getBirthYear - busca o ano do nascimento
 * getFullName - busca nome completo ( primeiro e último nome)
 */

//Buscando a Data atual - (DATE)
let dataHoje = new Date(); // Data atual
let ano = dataHoje.getFullYear(); //Ano atual 

let meuNovoCarro = new novoCarro('Palio', 2003);

console.log('')
console.log(meuNovoCarro.idadeCarro(ano)); // Para retorna a idade 

console.log(dataHoje)


///

    class classePessoa{
        constructor(firstName, lastName, dob){
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date();
        }
    
        
        getBirthYear(){
                return this.dob.getFullYear();
            }

        getFullName(){
                return `${this.firstName} ${this.lastName}`;
            }

    // // const getFullName = () =>{
    // //  return `${this.firstName} ${this.lastName}`;
        
    // // }
    }


// Instanciando um Objeto Pessoa
let pessoa1 = new classePessoa('Irmão do', 'Jorel', '2007-05-08');
let pessoa2 = new classePessoa('Pipoca', 'Animada', '1970-06-07');

console.log(pessoa1);
console.log(pessoa1.dob.getFullYear()); // o ano do aniversário
console.log(pessoa1.getBirthYear()); // Data de aniversário
console.log(pessoa1.getFullName());






