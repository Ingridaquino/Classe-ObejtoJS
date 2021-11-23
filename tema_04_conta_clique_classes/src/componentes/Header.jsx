const estilo = {
    color:'red',
    borderBottom: 'black solid 2px',
    backgroundColor: '#ccc',
};

const Header = (props) => {  
    return (  
          <div>  
             <h1 style={estilo}>Olá, {props.nome}, seja bem-vindo!</h1>  
          </div>  
     );  
};  
      

Header.defaultProps ={
    nome : 'Amora',
};

Header.prototype ={
    nome: PropTypes.string,
}