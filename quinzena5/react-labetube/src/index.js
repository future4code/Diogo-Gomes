import React from 'react';
import ReactDOM from 'react-dom';

//Importar Styles

//Styles Global
import './styles/globalStyles.css'

//Importar Imagens

//Importar Componetes
import Header from './components/Header/index'
import Footer from './components/Footer/index'


//Importar Paginas


import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
