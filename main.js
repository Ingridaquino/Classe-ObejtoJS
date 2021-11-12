// Exercício
class ContaBancaria{
    constructor(nome, idade, salário, sexo, agência, conta, tipoConta){
        this.nome = nome;
        this.idade = idade;
        this.salario = salário;
        this.sexo = sexo;
        this.agencia = agência;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }

    contaPoupança(){
        return this.salario - (this.salario * 0.015) 
    }

    contaCorrente(){
        return this.salario - (this.salario * 0.036) 

    }
    contaEstudante(){
        return this.salario - (this.salario * 0.012) 

    }
}

//Instanciando

const estudante1 = new contaBancaria('Julia', 18, 1200, 'Feminino', 'Banco Pipoca', 2003, 'contaEstudante');

console.log(estudante1);
console.log('O novo salário é: ', estudante1.contaEstudante());