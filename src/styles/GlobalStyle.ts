import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray1};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'SUITVariable', sans-serif;
    color: ${({ theme }) => theme.colors.black};
  }

  #root {
    font-family: 'SUITVariable', sans-serif;
    line-height: 19px;
    width: 100%;
    height: 100%;
    ${({ theme }) => {
      return css`
        ${theme.fonts.body}
        color: ${theme.colors.black};
        ${theme.mediaQuery.desktop} {
          .mobile {
            display: none;
          }
        }
        ${theme.mediaQuery.mobile} {
          .desktop {
            display: none;
          }
        }
      `;
    }}
  }

  div {
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray2};
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  hr {
    margin: 0;
  }
`;

export default GlobalStyle;
