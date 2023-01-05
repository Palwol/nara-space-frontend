import { SizeConfig, ColorConfig, FontConfig } from '@/styles/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: FontConfig;
    colors: ColorConfig;
    size: SizeConfig;
    mediaQuery: MediaQueryConfig;
  }
}
