import React, { useState } from 'react';
import styled from 'styled-components';

import { Wrapper } from './GlobalStyles';

const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.buttonText};
  display: flex;
  justify-content: space-between;
  min-width: 10rem;

  @media (min-width: ${({ theme }) => theme.breakpointS}) {
    margin-left: 1rem;
  }

  &:focus {
    outline-color: black;
  }

  line {
    transform-origin: center;
    transition: transform ${({ theme }) => theme.transitionEase};
  }

  &:focus,
  &:hover {
    line {
      transform: scale(0.5);
    }
  }
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.consentBackground};
  bottom: 0;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.25;
  position: fixed;
  width: 100%;
`;

const Text = styled.p`
  margin: 0 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpointS}) {
    margin: 0;
  }
`;

const ConsentWrapper = styled(Wrapper)`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpointS}) {
    flex-direction: row;
  }
`;

export function isCookieAccepted() {
  const consent = document.cookie
    .split(';')
    .filter(item => item.includes('cookieConsent=true')).length;

  return Boolean(consent);
}

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(!isCookieAccepted());

  function acceptCookie() {
    setIsVisible(false);

    const inAYear = new Date(
      new Date().getTime() + 365 * 24 * 60 * 60 * 1000,
    ).toUTCString();

    document.cookie = `cookieConsent=true; expires=${inAYear}; path=/`;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <Container>
      <ConsentWrapper>
        <Text>
          By browsing this site you accept cookies used to improve and
          personalise our services. Read our privacy policy for more about what
          we do with your data, and how to manage cookies.
        </Text>
        <Button type="button" onClick={acceptCookie}>
          Accept and Close
          <svg
            width="16"
            height="16"
            viewBox="0 0 360 360"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="95.1665"
              y1="264.853"
              x2="264.872"
              y2="95.1472"
              stroke="currentColor"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <line
              x1="264.872"
              y1="264.853"
              x2="95.1665"
              y2="95.1472"
              stroke="currentColor"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <circle
              cx="180"
              cy="180"
              fill="none"
              r="172"
              stroke="currentColor"
              strokeWidth="16"
            />
          </svg>
        </Button>
      </ConsentWrapper>
    </Container>
  );
}

export default CookieConsent;
