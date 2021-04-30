import * as S from './styles'

function CardVideo(props) {
    return(
     <S.CardVideo>
         <video class="videos" src={props.video}></video>
         <p>{props.titulo}</p>
     </S.CardVideo>
    );
}
export default CardVideo
