import styled from "styled-components"
import axios from "axios"
import React from "react"
import iconDelete from "../img/iconDelete.svg"
import { baseUrl, axiosConfig } from "../utils/config"

import IconPlaylists from "../img/Playlists.svg"


// Styleds
const ListDiv = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 940px;
  margin-left: auto;
  margin-right: auto;
`;

const PageTitle = styled.h1`
  margin: 0;
  color: grey;
`;

const ListContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  width: 50%;
`;

const PlaylistInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

const NamesDiv = styled.div`
  margin: 10px;
  text-align: center;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  display: flex;
`;

const DeleteButton = styled.img`
width: 20px;
height: 20px;
margin-left: 5px;
&:hover {
    cursor: pointer;
}
`

const ImgIconPlaylists = styled.img`
width: 10%;
height: 50%;
margin-left: 5px;
`

const TracksButton = styled.button`
  background-color: black;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 50px;
  padding: 1px;
  transition: 150ms;
  &:hover {
    background-color: #FE7E01;
    cursor: pointer;
  }
`;


class Playlists extends React.Component {

    state = {
        playlists: [],
    }

  //Atualizar Pagina
    componentDidMount = () => {
        this.getPlaylist()
    }

    //Carregar Playlists
    getPlaylist = () => {
        axios
        .get(baseUrl, axiosConfig)
        .then((res) => {
          this.setState({ playlists: res.data.result.list });
        })
        .catch((err) => {
          alert("Algo deu errado,");
          console.log(err);
        });
    };
    
    //Deletar Playlists
    delPlaylist = (playlistId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, 
        axiosConfig
        )
        .then((res) => {
            alert(`Playlist ${playlistId} deletada!`)
            this.getPlaylist()
        })
        .catch((err) => {
            alert("Ocorreu um erro!")
            console.log(err.data)
        })
    }


render() {
    return (
      <div>
        {this.state.playlists.length > 0 ? (
          <ListDiv>
            <ImgIconPlaylists src={IconPlaylists}></ImgIconPlaylists>
            <PageTitle>Lista de Playlists</PageTitle>
            <ListContainer>
              {this.state.playlists.map((playlist) => (
                <PlaylistInfo key={playlist.id}>
                  <NamesDiv>{playlist.name}</NamesDiv>
                  <ButtonDiv>

                    <TracksButton
                    //   Pag carregar títulos
                    >
                      Títulos
                    </TracksButton>
                  
                    <DeleteButton 
                        src={iconDelete} 
                        onClick={() => this.delPlaylist(playlist.id)}>
                    </DeleteButton>


                  </ButtonDiv>
                </PlaylistInfo>
              ))}
            </ListContainer>
          </ListDiv>
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    );
  }
}

export default Playlists