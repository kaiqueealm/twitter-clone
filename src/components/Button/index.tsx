import styled from 'styled-components';



interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${props => props.outlined ? 'transparent' : 'var(--twitter)'}; //se o botao outilne ele sera transparente ja se ele nao for contornado ese vai ser prenecido com a cor do twiter
  color:${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')}; // mudar a cor da texto
  border: ${props => props.outlined ? '1px solid var(--twitter)': 'none'};

  padding: 16px;
  border-radius: 25px; //pra deixa a borda redonda

  font-weight: bold;
  font-size: 15px;

  cursor: pointer; //deixa a maozinha
  outline: 0;

  &:hover{
    background: ${props => props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};
  }

`