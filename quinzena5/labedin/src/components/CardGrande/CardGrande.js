import React from 'react';
//import './CardGrande.css'

import * as S from './CardGStyled';


function CardGrande(props) {
    return (

        <S.ContainerCard>
            <div className="bigcard-container">
                <img alt="Astrodev" src={props.imagem}/>
                <div>
                    <h4>{ props.nome }</h4>
                    <p>{ props.descricao }</p>
                </div>
            </div>
        </S.ContainerCard>
    )
}

export default CardGrande;