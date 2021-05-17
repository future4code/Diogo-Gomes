
//Styels
import * as S from './stylesHeader.js';

//imagens
import Logo from '../../img/Logo1.svg';
import LupaBusca from '../../img/busca.png';


function Header() {

  return (
   
    <S.ContainerHeader>
    <img className="LogoLabtube" src={Logo} alt="LabTube" />
          <form action="">

            <input className="inputBusca" type="text" placeholder="Buscar Vídeos"/>

            <button className="botaoBusca" type="submit">
              <img className="lupaBusca" src={LupaBusca} alt="Embaralhar" />
            </button>

          </form>
    </S.ContainerHeader>

  );
}

export default Header;