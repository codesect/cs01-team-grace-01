import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0.5rem 1rem;
  width: 100%;
`;

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};;
    color: ${({ theme }) => theme.text};
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
                'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    min-height: 100vh
  }

  b, strong {
    font-weight: 600;
  }

  a {
    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    transition: border ${({ theme }) => theme.transitionEase}, color ${({
  theme,
}) => theme.transitionEase};

    &:focus,
    &:hover {
      border-bottom-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.text};
    }

  }

  button, input, select, textarea {
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0.5rem 1rem;
  }

  button {
    background-color: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.buttonText};
    cursor: pointer;
    transition: background-color ${({ theme }) => theme.transitionEase};

    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.buttonActive};
    }
  }

  input {
    background-color: ${({ theme }) => theme.input};
    transition: border-color ${({ theme }) => theme.transitionEase};

    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme.borderActive};
    }
  }

  select {
    appearance: none;
    background-image: ${({ theme }) =>
      `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="${encodeURIComponent(
        theme.text
      )}" width="292.4" height="292.4"%3E%3Cpath d="M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z"/%3E%3C/svg%3E')`};
    background-position: right 1rem top 50%;
    background-repeat: no-repeat;
    background-size: .75rem auto;

    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme.borderActive};
    }
  }

  a:focus,
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: thin dotted;
    outline-offset: 1px;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  svg {
    fill: currentColor;
  }
`;
