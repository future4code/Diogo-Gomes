import styled from "styled-components"
import axios from "axios"
import {baseUrl, axiosConfig} from "../utils/config"
import React from "react"

import IconPlaylists from "../img/Playlists.svg"


const CreateDiv = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 940px;
  margin-left: auto;
  margin-right: auto;
`;
const BoxContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`;

const InputAdd = styled.input`
  width: 90%;
  padding: 0;
  margin: 5px;
  text-align: center;
  margin-bottom: 30px;
`;
const CreateButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  width: 50%;
  padding: 1px;
  transition: 150ms;
  &:hover {
    background-color: #FE7E01;
    cursor: pointer;
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  color: grey;
`;

const ImgIconPlaylists = styled.img`
width: 10%;
height: 50%;
margin-left: 5px;
`

const TextDiv = styled.div``;

export default class CreatePlaylistPage extends React.Component {
  state = {
    inputNamePlaylist: "",
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputNamePlaylist,
    };
    axios
      .post(baseUrl, body, axiosConfig)
      .then((res) => {
        alert(
          `Playlist ${this.state.inputNamePlaylist} adicionado com sucesso`
        );
        this.setState({ inputNamePlaylist: "" });
      })
      .catch((err) => {
        alert("Errado na criação da lista de reprodução,");
        console.log(err);
      });
  };

  handleNamePlaylist = (e) => {
    this.setState({ inputNamePlaylist: e.target.value });
  };

  render() {
    return (
      <CreateDiv>
        <ImgIconPlaylists src={IconPlaylists}></ImgIconPlaylists>
        <PageTitle>Adicionar Playlist</PageTitle>
        <BoxContainer>
          <TextDiv>Name:</TextDiv>
          <InputAdd
            placeholder="Nome da Playlist"
            onChange={this.handleNamePlaylist}
            value={this.state.inputNamePlaylist}
          />
          <CreateButton onClick={this.createPlaylist}>ADICIONAR</CreateButton>
        </BoxContainer>
      </CreateDiv>
    );
  }
}