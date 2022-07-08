import React from 'react';

import StickyBox from 'react-sticky-box'

import FallowSuggestion from '../FallowSuggestion';

import News from '../News';

import List from '../List';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return(
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon/>
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FallowSuggestion 
                name='Luiz Batanero'
                nickname='@luizbatanero'
              />,
              <FallowSuggestion 
                name='Luke Morales'
                nickname='@LukeMorales'
              />,
              <FallowSuggestion 
                name='Camila Magalhães'
                nickname='@CamilaMagalhães'
              />,
            ]}  
          />
          <List
            title='Talvez você curta'
            elements={[
              <News/>,<News/>,<News/>,
            ]}  
          />
          <List
            title='Talvez você curta'
            elements={[
              <News/>,<News/>,<News/>,
            ]}  
          />
          <List
            title='Talvez você curta'
            elements={[
              <News/>,<News/>,<News/>,
            ]}  
          />
          <List
            title='Talvez você curta'
            elements={[
              <News/>,<News/>,<News/>,
            ]}  
          />
        </Body>
        </StickyBox>
    </Container>
  );
}

export default SideBar;