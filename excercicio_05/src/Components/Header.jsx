import PropTypes from 'prop-types';  
import Button from './Button';  

    
    const Header = ({title}) => {  
        const onClick = () =>{
            // alert("Você clicou em mim");
            let elemento = document.createElement('li');
                elemento.innerHTML = 'Limpar a casa'
                let container = document.querySelector('.container');
                container.appendChild(elemento);
        };  
    	    return (  
            <header>  
	            <h1>Tarefas da {title}</h1>  
                <section>
                    <div class="list">
                        <ul></ul>
                    </div>
                </section>
                 <Button bgColor="red" text="Add" onClick ={onClick} />  

                <footer>
                    <span> 2021</span>
                </footer>
	        </header>  
	    );  
};  

Header.defaultProps = {  
    title: 'casa',  
};  

Header.propTypes = {  
    title: PropTypes.string.isRequired,  
};  

export default Header;  
