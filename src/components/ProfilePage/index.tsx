
import React from 'react';

import Tweet from '../Tweet'

import { Container, Banner, Avatar, ProfileData, LocationIcon, CokeIcon, Followage, EditButton, Tab, Tweets, } from './styles';


const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Kaique Almeida</h1>
        <h2>@kaique_alm</h2>

        <p>
          Developer at <a href="https://Roocktseat.com.br">@Roocktseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
             São Paulo, Brasil 
          </li>
          <li>
            <CokeIcon />
             Nacido(a) em 12 de outubro de 1997
          </li>
        </ul>

        <Followage>
          <span>
             seguindo <strong>100 </strong>
          </span>
          <span>
             seguidores <strong>10K </strong>
          </span>
        </Followage>
      </ProfileData>
      <Tab>Tweets</Tab>

       
        <Tweets>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
        </Tweets>
    
      
  



    </Container>

   

      
 );
}

export default ProfilePage;

