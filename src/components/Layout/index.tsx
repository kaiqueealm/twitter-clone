import React from 'react';


import SideBar from '../SideBar';

import MenuBar from '../MenuBar';



import Main from '../Main';



 import { Container, Wrapper } from './styles';



const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper> 
        <MenuBar/> 
        <Main/>
        <SideBar/> 
      </Wrapper>
    </Container> //e a pagina inteira
  );
}

export default Layout;

// ctrl mais virgula com ponto comenta em react