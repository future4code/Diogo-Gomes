import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {baseUrl} from '../parameters'
import ImgLimpar from '../img/limpar.png'
import ImgBaixados from '../img/baixados.svg'
import {ImagemInicial, CardInicial, Btms ,Btm, BmtPag} from '../styled'


export default function TelaInicial(props) {

    const [perfil, setPerfil] = useState({})
    const [carregado, setCarregado] = useState(false)

    const pegarPerfil = async () => {
        try {
            const response = await axios.get(`${baseUrl}/person`)
            setPerfil(response.data.profile)
            setCarregado(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        pegarPerfil()
    }, [])

    const escolhaPerfil = async (resposta) => {
        if (!perfil) {
            window.alert("Não há mais usuários disponíveis, tente novamente mais tarde.")
            return
        }
        const body = {
            id: perfil.id,
            choice: resposta
        }
        try {
            await axios.post(`${baseUrl}/choose-person`, body)
            pegarPerfil()
            setCarregado(false)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <CardInicial>
            <BmtPag>
                <img  src={ImgLimpar} alt="Limpar Matches" onClick={props.limparMatches}  />
                <img  src={ImgBaixados} alt="Matches" onClick={() => props.mudarPagina('matches')}  />
            </BmtPag>
            {!carregado && <h1>Carregando...</h1>}
            {(carregado && !perfil) && <h1>Não há mais usuários disponíveis</h1>}
            {(carregado && perfil) && <h1>{perfil.name}, {perfil.age}</h1>}
            {(carregado && perfil) && <h3>{perfil.bio}</h3>}
            {(carregado && perfil) && <ImagemInicial src={perfil.photo} alt="Foto da Pessoa"/>}
            <Btms>
                <Btm onClick={() => escolhaPerfil(true)}>Sim</Btm>
                <Btm onClick={() => escolhaPerfil(false)}>Não</Btm>
            </Btms>
        </CardInicial>
    )
}