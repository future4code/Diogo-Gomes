import styled from 'styled-components'

export const DivGlobal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
font-family: roboto, arial;
`


export const HeaderCardInfo = styled.div`
  align-items: center;
`


export const CardInicial = styled.div`
width: 400px;
height: 550px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid black;
border-radius: 5px;
background-color: white;
box-shadow: 0px 0px 6px black;
 
h3{
  padding-left: 10px;  
}
h1{
  padding-left: 10px;  
}

`
export const ImagemInicial = styled.img`
    
width: 100%;
height: 60%;
justify-content: flex-end;

background-size: cover;
background-position:center;

`

export const Btms = styled.div`
width: 100%;
display: flex;
justify-content: space-between;`


export const Btm = styled.button`
font-size: 25px;
width: 50%;`

export const CardMatches = styled.div`
border: 2px solid black;
width: 36vw;
padding: 2px;
min-height: 95vh;
`

export const Match = styled.div`
display: flex;
align-items: center;
margin: 0px 10px;
img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin: 0px 10px 0px 0px;
}`

export const BmtPag = styled.div`
width: 98%;
display: flex;
justify-content:space-between;
padding: 5px;

img{
  width: 25px;
  height: 25px;
}

button {
    width: 100%;
    font-size: 18px;
    border-radius: 6px;
}

`

export const Aviso = styled.div`
width: 100%;
text-align: center;`