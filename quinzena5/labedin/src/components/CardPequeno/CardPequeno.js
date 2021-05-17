import React from 'react';

import * as S from './CardPStyled';

function CardPequeno (props) {
    return(
      <S.ContainerPequeno>
        <div className="little-container">
          <img alt="Icon Email" src={props.iconEmail}/>
          <p><b>Email: </b>{props.email}</p>
        </div> 
        <div className="little-container">
          <img alt="Icon Endereço" src={props.iconEnd}/>
          <p><b>Endereco: </b>{props.end}</p>
        </div> 
      </S.ContainerPequeno>  
    );
}

export default CardPequeno; 