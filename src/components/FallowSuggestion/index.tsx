import React from 'react';

import { Container, Avatart, Info, FallowButton } from './styles';

interface Props{
  name: string;
  nickname: string;
}

const FallowSuggestion: React.FC<Props> = ({
  name,
  nickname
}) => {
  return(
    <Container>
      <div>
        <Avatart />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FallowButton outlined>Seguir</FallowButton>
    </Container>
  );
}

export default FallowSuggestion;