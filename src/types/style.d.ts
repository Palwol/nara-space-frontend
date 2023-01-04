import 'styled-components';
import { ColorConfig, FontConfig } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: FontConfig;
    colors: ColorConfig;
    mediaQuery: MediaQueryConfig;
  }
}
