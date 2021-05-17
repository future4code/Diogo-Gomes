
//Styels
import * as S from './styles'

import Iframe from 'react-iframe'



function Video1() {
    return (

        
      <S.VideoDestaque>
        
        <div class="tituloVideo">
            <a href="index.html">Voltar</a>
            <h1>Lorem ipsum dolor sit amet. Cum expedita excepturi est pariatur quisquam et minima impedit sed voluptatem accusamus.</h1>
        </div>

        <div class="videoFull">
            <div class="boxfull"> 
               <Iframe width="100%" height="100%" class="video" url="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" />
            </div>
        </div>
      
     </S.VideoDestaque> 
   
    
    ); 
}

export default Video1