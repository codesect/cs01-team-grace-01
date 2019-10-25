import React from "react";
import styled from "styled-components";

import { Wrapper } from "./GlobalStyles";

import PropTypes from 'prop-types';

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const SearchBox = () => {
  return (
    <main>
      <Hero>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <label>Start by searching for a phone number</label>
            <input type="text" placeholder="Type a phone number" />
            <button type="submit">Submit</button>
          </form>
        </Wrapper>
      </Hero>
    </main>
  );
};


SearchBox.prototypes = {
    onSubmit: PropTypes.func.isRequired
}