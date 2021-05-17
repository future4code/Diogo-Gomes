
//Styels
import * as S from './styles'

//Importar logo logoFooter
import logoFooter from '../../img/Logo2.png'


function Footer() {
    return (

        <S.Footer>
            <div className="containerFooter">
                <img className="logoFooter" src={logoFooter} alt="LogoLabeTube"/>
            </div>
        </S.Footer>
    
    ); 
}

export default Footer