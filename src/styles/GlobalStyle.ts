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

  #root {
    font-family: SUITVariable, sans-serif;
    ${({ theme }) => theme.fonts.body}
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default GlobalStyle;
