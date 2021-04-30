import React from 'react';

import * as S from './ImagemBStyled';


function ImagemButton(props) {
    return (
        
        <S.ContainerButton>
            <div className="image-button-container">
                <img alt="Imagem" src={ props.imagem }/>
                <p>{ props.texto }</p>
            </div>
        </S.ContainerButton>

    )
}

export default ImagemButton;