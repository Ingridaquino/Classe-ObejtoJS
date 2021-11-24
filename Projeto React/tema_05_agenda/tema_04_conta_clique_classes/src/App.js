import './App.css';
import { Component } from 'react';  
import Exemplo from './components/Exemplo'
import Header from './components/Header';


   function App() {  
	    return (  
	        <div className="App">  
				<Header nome="Amora" />
				<Exemplo />  
	        </div>  
	    );  
	}  
	  

export default App;  
