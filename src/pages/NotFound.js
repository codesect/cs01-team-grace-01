import React from 'react';
import styled from 'styled-components';

import { Wrapper } from '../components/GlobalStyles';

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 7.375rem);
`;

const NotFound = () => {
  return (
    <main>
      <Hero>
        <Wrapper>
          <h1>404: Not Found</h1>
        </Wrapper>
      </Hero>
    </main>
  );
};

export default NotFound;
