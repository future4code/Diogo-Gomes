import React, {useState} from 'react'
import axios from 'axios'
import TelaInicial from './pages/TelaInicial'
import TelaMatches from './pages/TelaMatches'
import {baseUrl} from './parameters'
import {DivGlobal} from './styled'

export default function App() {

  const [paginaAtual, setPaginaAtual] = useState('inicial')
  
  const renderizarPagina = () => {
    if (paginaAtual === 'inicial') {
      return <TelaInicial mudarPagina={mudarPagina} limparMatches={limparMatches}/>
    }
    else if (paginaAtual === 'matches') {
      return <TelaMatches mudarPagina={mudarPagina} limparMatches={limparMatches}/>
    }
  }

  const mudarPagina = (novaPagina) => {
    setPaginaAtual(novaPagina)
  }

  const limparMatches = async () => {
    if (!window.confirm("Você tem certeza que quer limpar os Matches?")) {
      return
    }
    try {
      await axios.put(`${baseUrl}/clear`)
   
      setPaginaAtual('matches')
      setPaginaAtual('inicial')
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <DivGlobal>
      {renderizarPagina()}
    </DivGlobal>
  )
}