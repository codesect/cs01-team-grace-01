import React from 'react';
import styled from 'styled-components';

import { Wrapper } from '../components/GlobalStyles';

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 7.375rem);
`;

const Home = () => {
  return (
    <main>
      <Hero>
        <Wrapper>
          <h1>Home Page</h1>
        </Wrapper>
      </Hero>
    </main>
  );
};

export default Home;
