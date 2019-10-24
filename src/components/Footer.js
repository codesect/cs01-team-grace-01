import React from 'react';
import styled from 'styled-components';

import { Wrapper } from './GlobalStyles';

const Credits = styled.p`
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
`;

const WrapperWithBorder = styled(Wrapper)`
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Footer = () => (
  <footer>
    <WrapperWithBorder>
      <Credits>Made by Muhammad Bilal and Zsolt Meszaros for CodeSect</Credits>
    </WrapperWithBorder>
  </footer>
);

export default Footer;
