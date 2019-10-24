import React from 'react';
import styled from 'styled-components';

import { Wrapper } from '../components/GlobalStyles';

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 7.375rem);
`;

const Lookup = () => {
  return (
    <main>
      <Hero>
        <Wrapper>
          <h1>Lookup Page</h1>
        </Wrapper>
      </Hero>
    </main>
  );
};

export default Lookup;
