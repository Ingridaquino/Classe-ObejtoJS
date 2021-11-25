 import PropTypes from 'prop-types';  
import Button from './Button';  

const Header = ({title}) =>{
    const onClick = () => {  
         alert('Clicou');  
};  
    return(
        <header>
            <h1>Agenda de {title}</h1>
            <Button bgColor="green" text="add" onClick ={onClick} />
        </header>
    );
    
};

Header.defaultProps ={
    title:'Compromissos',
};

Header.propTypes = {  
    title: PropTypes.string.isRequired,  
};  
	  
export default Header;  
    