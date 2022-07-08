import styled, { css } from "styled-components";

import Button from "../Button";

import { LocationOn, Cake,   } from '../../styles/icons'

export const  Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto ; // vai colocar um scrol

  scrollbar-width: none; //firefox

  ::-webkit-scrollbar{
    display: none; //praquando for scrolar nao aparecer a barra de scrol
  }

  `

export const  Banner = styled.div`
  flex-shrink: 0;  // para nao deixar diminuir o tmanho

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);

  position: relative;
`;

export const  Avatar = styled.div`
  width: max(45px, min(135px, 22vw)); //pra deixar mais responcivo;
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50% ;

  position: absolute; //tem que colocar o relative tambnem se nao nao funciona
  bottom: max(-60px, -10vw); //pra abaixar o avatar

  left: 15px;

`;

export const  ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }
  

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
    text-decoration: none;
    color: var(--twitter);
  }
  }

  

  >ul{
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    >li{
      font-size: 15px;
      color: var(--gray);

      >svg{
        fill: var(--gray);
        margin-right: 8px;
      }
    }
  
    }

    

  
`;

const iconCSS = css`
 width: 20px;
 height: 20px;

 color: var(--gray);
`;

export const  LocationIcon = styled(LocationOn)`${iconCSS}`;

export const  CokeIcon = styled(Cake)`${iconCSS}`;

export const  Followage  = styled.div`
  display: felx;

  > span {
    font-size: 15px;
    color: var(--gray);
    
      & + sapan{
        margin-left: 20px;
      }
  }
`;

export const EditButton = styled(Button)`
  position: absolute; //nao funciona se colocar o relativo 
  top: 2vw; //colocar o tamanho da tela
  right: 7px; //coloca bem pra esquerda

  padding: 4px 16px; 
  font-size: 13px;

  @media (min-width: 320px){
    top: 10px;
    padding: 10px;
    font-size: 15px;
  }
`;
export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover{
    background: var(--twitter-dark-hover);
  }

  `;

  export const Tweets = styled.div`
    display: flex;
   

    flex-direction: column;

    flex-shrink: 0;
  `;

