
document.body.style.textAlign = 'center';
document.body.style.margin = '4rem';

function button(){
    let mes = window.prompt('Informe o mês do Ano');       
    let h3 = document.createElement('H3');
    document.body.appendChild(h3);
    
    
    if(mes == 'Janeiro' || mes == 'Fevereiro' || mes == 'Março'){
        //Inverno
        h3.innerHTML = `O mês escolhido é ${mes}, e a estação do ano é Inverno `;
        h3.style.backgroundColor = '#019fe6';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#fff';

    }else if(mes == 'Abril' || mes == 'Maio' || mes == 'Junho'){
        //Primavera
        h3.innerHTML = `O mês escolhido é ${mes}, e a estação do ano é Primavera `;
        h3.style.backgroundColor = '#c44c72';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#fff';

    }else if(mes == 'Julho' || mes == 'Agosto' || mes == 'Setembro'){
        //Verão
        h3.innerHTML = `O mês escolhido é ${mes}, e a estação do ano é Verão `;
        h3.style.backgroundColor = '#76c104';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#fff'

    }else if(mes == 'Outubro' || mes == 'Novembro' || mes == 'Dezembro'){
        //Outono
        h3.innerHTML = `O mês escolhido é ${mes}, e a estação do ano é Outono`;
        h3.style.backgroundColor = '#fea607';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#fff';
    }
}
