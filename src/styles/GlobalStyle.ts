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
  }

  #root {
    font-family: SUITVariable, sans-serif;
    font-size: 30px;
  }
`;

export default GlobalStyle;
