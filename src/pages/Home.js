import React from 'react';
import styled from 'styled-components';

import { Wrapper } from '../components/GlobalStyles';
import { SearchBox } from '../components/SearchBox';

import LatestRatings from '../components/LatestRatings';

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 7.375rem);
  text-align: center;
`;

const Home = () => {
  return (
    <main>
      <Hero>
        <Wrapper>
          <h1>Home Page</h1>
          <SearchBox onSubmit={console.log} />
          <LatestRatings />
        </Wrapper>
      </Hero>
    </main>
  );
};

export default Home;
