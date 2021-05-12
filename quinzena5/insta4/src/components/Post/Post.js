import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: true,
    numeroComentarios: 0,

    postMessage:[
      {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
      }, 
      {
      nomeUsuario: 'Diogo',
      fotoUsuario: 'https://picsum.photos/50/51',
      fotoPost: 'https://picsum.photos/201/150'
      },
      {
      nomeUsuario: 'Davi',
      fotoUsuario: 'https://picsum.photos/50/52',
      fotoPost: 'https://picsum.photos/202/150'
      },
    ],

  }

  onChangeInputName = (e) =>{
    this.setState({valorNome: e.target.value})
  }

  onChangeInputFoto = (e) =>{
    this.setState({valorFoto: e.target.value})
  }

  onChangeInputPost = (e) =>{
    this.setState({valorPost: e.target.value})
  }


  onClickCurtida = () => {
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas +1
    })
    console.log('Curtiu!')
  }

  adicionarPost = () => {

    const novoUsuario = {
      nomeUsuario: this.state.valorNome,
      fotoUsuario: this.state.valorFoto,
      fotoPost: this.state.valorPost,
    }

    const listaDeUsuariosNova = [...this.state.postMessage, novoUsuario];

    this.setState({postMessage: listaDeUsuariosNova})
  }

  doubleClickDescurtida = () => {
    let novoNumeroCurtidas
    
    if(this.state.curtido){
      console.log('Descurtida!')
      novoNumeroCurtidas = this.state.numeroCurtidas - 1
    } else {
      console.log('Curtiu!')
      novoNumeroCurtidas = this.state.numeroCurtidas + 1
    }
      
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: novoNumeroCurtidas
      })
    }


  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    const listaDeUsuarios = this.state.postMessage.map((props) => {

    return (
      <PostContainer>
      <PostHeader>
        <UserPhoto 
        src={props.fotoUsuario} 
        alt={'Imagem do usuario'}
        />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto 
      src={props.fotoPost} 
      alt={'Imagem do post'}
      />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          doubleClickIcone={this.doubleClickDescurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
    );
  })

    return (
      <div>
      <input onChange={this.onChangeInputName} type="text" placeholder="Nome do usuario"/><br/>
      <input onChange={this.onChangeInputFoto} type="text" placeholder="Sua foto"/><br/>
      <input onChange={this.onChangeInputPost} type="text" placeholder="Seu post"/><br/>
      <button onClick={this.adicionarPost}>Enviar</button><br/><br/>
      {listaDeUsuarios}
      </div>
      )
  }
}

export default Post