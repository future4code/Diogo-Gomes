import NewPlaylist from "./components/newPlaylist"
import Playlists from "./components/playlist"
import styled from "styled-components"
import React from "react"
import logo from "./img/Logo1.svg"

import IconAddPlaylist from "./img/BtmAddPlaylist.svg"
import IconListaPlaylist from "./img/BtmListaPlaylist.svg"

import Footer from "./components/Footer";


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: #FFFFFF;
  justify-content: space-between;
`

const DivConteudo = styled.div`
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
`

const BtmPlaylist = styled.img`
height: 80%;
margin-right: 80px;
&:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px #FE7E01;
    border-radius: 5px;
}`

const Logo = styled.img`
  margin-left: 80px;
  height: 80%;
`

const Titulo = styled.h1`
  color: #494D4B;
  font-size: 20px;
`

export class App extends React.Component {

  state = {
    page: "Home"
  }

  changePage = () => {
    // eslint-disable-next-line default-case
    switch(this.state.page) {
      case "Home":
        return  <NewPlaylist /> 
      case "Lista":
        return  <Playlists /> 
    }
  }

  changePageState = () => {
    if(this.state.page === "Home" ) {
    this.setState({page: "Lista"})
    } else if (this.state.page === "Lista") {
    this.setState({page: "Home"})
    }
  }

  changeButton = () => {
    // eslint-disable-next-line default-case
    switch(this.state.page) {
      case "Home":
        return (
          <BtmPlaylist 
          src={IconListaPlaylist} 
          onClick={this.changePageState}>
          </BtmPlaylist> 
        )
       
      case "Lista":
        return (
          <BtmPlaylist 
          src={IconAddPlaylist} 
          onClick={this.changePageState}>
          </BtmPlaylist> 
        )
    }
  }

  render() {
    return(
      <DivContainer>

        <Header>
        <Logo src={logo}></Logo>
        <Titulo> O melhor para você ouvir, sempre </Titulo>
        {this.changeButton()}
        </Header>

        <DivConteudo>
        {this.changePage()}
        </DivConteudo>


        <Footer />
      
        
      </DivContainer>
    )
  }
}
export default App