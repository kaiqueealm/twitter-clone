import React from 'react';

import { Container, Retweeted, RocktseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, ComentarIcon, RetweetIcon, LikeIcon} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
    <Retweeted>
      <RocktseatIcon />
      Você retweeted
    </Retweeted>

    <Body>
      <Avatar/>

      <Content>
        <Header>
          <strong>Rocktseat</strong>
          <span>@Rocktseat</span>
          <Dot />
          <time>15 de ago</time>
        </Header>
        <Description>Foguete não tem ré 🚀</Description>
        <ImageContent />
        <Icons>
          <Status>
            <ComentarIcon/>
            18
          </Status>
          <Status>
            <RetweetIcon/>
            18
          </Status>
          <Status>
            <LikeIcon/>
            18
          </Status>
        </Icons>
      </Content>
    </Body>
  </Container>
  );
}

export default Tweet;