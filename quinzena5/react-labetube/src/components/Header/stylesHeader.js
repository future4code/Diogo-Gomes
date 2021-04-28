import styled from 'styled-components';

export const ContainerHeader = styled.div`
    background: #000000;
    height: 6.5rem;
     
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 2rem ;

    border-bottom: 1px solid red;
    box-shadow: 0px 3px 6px 0px #B20000;

   
    .LogoLabtube{
    height: 100px;
    width: 350px;
    }

    .botaoBusca{
    background-color: #B20000;
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 10px 0px;
    }

    .inputBusca {
    color:rgb(255, 255, 255);
    height: 32px;
    width: 350px;
    padding-left: 10px;
    border: none;
    border-radius: 0%;
    border-bottom: 1px solid  #B20000;
    background-color: transparent;
    }

    .inputBusca:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
    }

    .lupaBusca {
    height: 20px;
    }

`
export const LogoHeader = styled.img`
  
`
export const InputBusca = styled.input``
 
export const ButtonBusca = styled.button``
