import React from 'react';

//Styleds
import './App.css';

//Imgs
import ImgPerfil from './img/ImgPerfil.svg'
import ImgCreditas from './img/ImgCreditas.svg'
import ImgStone from './img/ImgStone.png'
import IconEnd from './img/IconEnd.svg'
import IconEmail from './img/IconEmail.svg'

//Componetes
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';





function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardGrande 
          imagem={ImgPerfil} 
          nome="Diogo Silva" 
          descricao="Estudante, apaixonado por programação e família. Com uma mente curiosa sempre aberto para novas descobertas."
        />

        <CardPequeno 
        iconEmail={IconEmail}
        email="diogomfc@hotmail.com"
        iconEnd={IconEnd}
        end="Rua, Carolina, 0125 - Barueri-SP"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImgCreditas} 
          nome="Creditas - Consultor Comercial" 
          descricao="Responsável por identificar necessidades, pesquisar o mercado, explicar o funcionamento de um produto ou serviço e prestar atendimento ao cliente." 
        />
        
        <CardGrande 
          imagem={ImgStone}
          nome="Stone - Consultor Comercial" 
          descricao="Participar de reuniões matinais de time no escritório local, planejar e executar suas rotas comerciais externas e cumprir a meta de visitas diárias aos lojistas, conquistar novos clientes (Prospecção) e gerenciar sua carteira de clientes e pós-venda" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
