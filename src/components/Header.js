import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header};
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  border: 0;
`;

const Logo = styled.h1`
  align-items: center;
  color: ${({ theme }) => theme.headerText};
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
  margin: 0;
  padding: 1rem;
  text-align: center;
  width: 100%;

  svg {
    fill: ${({ theme }) => theme.text};
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    svg {
      transform: scale(0.9);
    }
  }

  span {
    display: block;
  }
`;

const Tagline = styled.span`
  font-size: 0.825rem;
  font-weight: 300;
  letter-spacing: 1.75px;
`;

const Title = styled.span`
  font-weight: 300;
  text-transform: lowercase;
  word-spacing: -10px;
`;

const Header = () => (
  <StyledHeader>
    <StyledLink to="/">
      <Logo>
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M161 32C143.327 32 129 46.3269 129 64V448C129 465.673 143.327 480 161 480H353C370.673 480 385 465.673 385 448V64C385 46.3269 370.673 32 353 32H161ZM369 64H145V416H369V64ZM272 448C272 456.837 264.837 464 256 464C247.163 464 240 456.837 240 448C240 439.163 247.163 432 256 432C264.837 432 272 439.163 272 448ZM224 44C221.791 44 220 45.7909 220 48C220 50.2091 221.791 52 224 52H288C290.209 52 292 50.2091 292 48C292 45.7909 290.209 44 288 44H224Z"
            />
            <rect x="192" y="340" width="128" height="20" rx="10" />
            <rect x="227" y="176" width="60" height="16" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M311 128C292.739 128 278.181 143.257 279.036 161.498L282.036 225.498C282.836 242.57 296.91 256 314 256H397.868C414.575 256 428.47 243.148 429.771 226.492L434.771 162.492C436.224 143.894 421.524 128 402.868 128H311ZM318.622 141C304.924 141 294.004 152.446 294.648 166.128L297.189 220.128C297.792 232.93 308.347 243 321.163 243H391.274C403.801 243 414.221 233.365 415.201 220.877L419.436 166.877C420.53 152.925 409.504 141 395.51 141H318.622Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M203 128C221.261 128 235.819 143.257 234.964 161.498L231.964 225.498C231.164 242.57 217.09 256 200 256H116.132C99.4254 256 85.5303 243.148 84.2291 226.492L79.2291 162.492C77.7761 143.894 92.4764 128 111.132 128H203ZM195.378 141C209.076 141 219.996 152.446 219.352 166.128L216.811 220.128C216.208 232.93 205.653 243 192.837 243H122.726C110.199 243 99.7787 233.365 98.7992 220.877L94.5639 166.877C93.4697 152.925 104.496 141 118.49 141H195.378Z"
            />
          </g>
        </svg>

        <span>
          <Title>
            Who <b>Calls</b> Me
          </Title>
          <Tagline>reverse phone lookapp</Tagline>
        </span>
      </Logo>
    </StyledLink>
  </StyledHeader>
);

export default Header;
