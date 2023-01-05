import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'SUITVariable', sans-serif;
    color: ${({ theme }) => theme.colors.black};
  }

  body {
    font-family: 'SUITVariable', sans-serif;
    line-height: 19px;
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
