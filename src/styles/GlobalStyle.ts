import { createGlobalStyle } from 'styled-components';
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
    ${({ theme }) => theme.fonts.body}
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
