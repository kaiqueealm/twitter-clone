import styled, { css } from "styled-components";

import { ArrowLeft, Home, Search, Notifications, Email } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }


`;
export const Header = styled.div`
  z-index: 2; //especificar que esse elemento fica acima de tudo
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center; //deixar os itens alinhados em vertical

  text-align: left; // jogar todo texto para direita

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {    // a flecha que aparece na direita
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
      }
  }  

  `;
export const BackIcon = styled(ArrowLeft)`
  width: 24px;  //importa a flechinha
  height: 24px;

  fill: var(--twitter); // que vai ser a cor
`;
export const ProfileIcon = styled.div`
  margin-left: 17px ; //fazer com  que de um espaço da flecha

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }
  > span{
    font-size: 15px;
    color: var(--gray);
  }


`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0; //para ir para parte de baicho da tela
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;  //consumir 100% do espaço da tela
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between; // fazer com que os icones sejam separados
  padding: 8px min(46px, max(10vw, 10px)); //um calculo que vai fazer a barrinha aumenta com o tamanho da tela;

  @media (min-width: 600px) {
    display: none;
  }

`;

const iconsCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer; //para quando passar o mouse em cima do icone aparecer a maozinha

  fill: var(--gray);

  &:hover,
  &.active{
    fill: var(--twitter); // pra quando passar o mous  e mudar de cor
  }
`;


export const HomeIcon  = styled(Home)`
  ${iconsCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconsCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconsCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconsCSS}
`;
