import React from 'react';
import ReactDOM from 'react-dom';

//Importar Styles

//Styles Global
import './styles/globalStyles.css'

//Importar Imagens

//Importar Componetes
import Header from './components/Header/index'
import Footer from './components/Footer/index'

import App from './App';


//Importar Paginas


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
