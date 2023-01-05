import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import SUITVariable from '@/assets/fonts/SUIT-Variable.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'SUITVariable';
    src: url(${SUITVariable}) format('truetype');
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: SUITVariable, sans-serif;
    color: ${({ theme }) => theme.colors.black};
  }

  body {
    font-family: SUITVariable, sans-serif;
    width: 100%;
    height: 100%;
    ${({ theme }) => {
      return css`
        ${theme.fonts.body}
        color: ${theme.colors.black};
        background-color: ${theme.colors.gray1};
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

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
