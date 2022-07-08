import styled, { css } from "styled-components";

import { Chat, Rocketseat, Favorite } from '../../styles/icons'

export const Container = styled.div`
  diplay: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;

`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;

export const RocktseatIcon = styled(Rocketseat)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  >path{
    fill: var(--gray);
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%; //pra arredonda
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px; //pra distancia do avatar

`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  width-space: nowape;//nowape para nao quebra linha

  >strong{
    margin-right: 5px;
  }

  >span, time{ 
   //@Rocktseat15 de ago vao ficar com a cor cinza

    color: var(--gray)

  }

  >strong, span{
    white-space: nowrap;
    text-overflow: ellipsis; //3 posntinhos para que quando a tela fique pequena demais
    overflow: hidden;

  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;

`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));  // vw altura formula limitadora

  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
`;

export const Icons   = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; //para separar os itens

  flex-wrap: wrap; //os icones vao quebrando
  margin: 11px auto 0;
  width: 100%; // isso no mobile 

  @media (min-width: 330px) {
    width: 63%; //pra consomir em tela maior
    >div{
      cursor: pointer;

      &:hover{
        opacity: 0.7;
      }
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  >svg{
    margin-right: 5px;
  }

  &:nth-child(1){
    &, >svg path{
      color: var(--gray);
    }
  }

  &:nth-child(2){
    color: var(--retweet);
    svg path{
      fill: var(--retweet);
    }
  }
  &:nth-child(3){
    color: var(--like);
    svg path{
      fill: var(--like);
    }
  }


`;

const iconCSS = css`
  width: 19px;
  height: 19px;


`;

export const ComentarIcon = styled(Chat)`${iconCSS}`;

export const RetweetIcon = styled(Rocketseat)`${iconCSS}`;

export const LikeIcon = styled(Favorite)`${iconCSS}`;