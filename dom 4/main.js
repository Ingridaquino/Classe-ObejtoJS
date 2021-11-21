const itens = document.querySelectorAll('.item');
const ulItem = document.querySelector('.items');
const valores = document.querySelectorAll('.valor');
const span = document.querySelectorAll('span');

// console.log(span[4].innerHTML)

function promocao(){ 
    //Pegando o dia da semana
    const diaPromo = new Date().getDay();
    const porcentDesc = 0.20;

    const myP = document.createElement('p');
    myP.innerHTML = 'Promoção'; 

    if (diaPromo === 1) {
        calculaDesconto(valores, 0, porcentDesc)
        itens[0].appendChild(myP)
        return
    }

    if (diaPromo === 2) {
        calculaDesconto(valores, 1, porcentDesc)
        itens[1].appendChild(myP)
        return
    }

    if (diaPromo === 3) {
        calculaDesconto(valores, 2, porcentDesc)
        itens[2].appendChild(myP)
        return
    }
        
    if (diaPromo === 4) {
        calculaDesconto(valores, 3, porcentDesc)
        itens[3].appendChild(myP)
        return
    }
        
    if (diaPromo === 5) {
        calculaDesconto(valores, 4, porcentDesc)
        itens[4].appendChild(myP)
        return
    }

}





const calculaDesconto = (lista, indice, porcentagem) => {
    const valor = parseInt(lista[indice].innerText, 10)
    const comDesconto = valor - valor * porcentagem

    lista[indice].innerText = comDesconto
}







