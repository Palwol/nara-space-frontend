import { DefaultTheme } from 'styled-components';

const makeFont = (weight: number, size: number) => {
  return `font-weight: ${weight}; font-size: ${size}px;`;
};

type FontsName = 'naviBold' | 'navi' | 'title' | 'body';
type ColorsName =
  | 'black'
  | 'white'
  | 'gray1'
  | 'gray2'
  | 'lightblue'
  | 'lightblue1'
  | 'blue'
  | 'blue1'
  | 'blue2'
  | 'blue3'
  | 'blue4';
type MediaQueryName = 'mobile' | 'desktop';

export type FontConfig = {
  [key in FontsName]: string;
};

export type ColorConfig = {
  [key in ColorsName]: string;
};

export type SizeConfig = {
  mobile: number;
};

export type MediaQueryConfig = {
  [key in MediaQueryName]: string;
};

const fontWeight = {
  light: 300,
  medium: 400,
  semiBold: 500,
  bold: 600,
  extraBold: 700,
};

const fontSize = {
  body: 15,
  navi: 16,
};

const fonts: FontConfig = {
  naviBold: makeFont(fontWeight.bold, fontSize.navi),
  navi: makeFont(fontWeight.medium, fontSize.navi),
  title: makeFont(fontWeight.semiBold, fontSize.body),
  body: makeFont(fontWeight.light, fontSize.body),
};

const colors: ColorConfig = {
  black: '#000000',
  white: '#FFFFFF',
  gray1: '#EBEBEB',
  gray2: '#D4D4D4',
  lightblue: '#CBC5F0',
  lightblue1: 'rgba(203, 197, 240, 0.5)',
  blue: '#4130be',
  blue1: 'rgba(65, 48, 190, 0.2)',
  blue2: 'rgba(65, 48, 190, 0.3)',
  blue3: 'rgba(65, 48, 190, 0.4)',
  blue4: 'rgba(65, 48, 190, 0.6)',
};

const size: SizeConfig = {
  mobile: 650,
};

const mediaQuery: MediaQueryConfig = {
  mobile: `@media only screen and (max-width: ${size.mobile}px)`,
  desktop: `@media only screen and (min-width: ${size.mobile + 1}px)`,
};

const theme: DefaultTheme = { fonts, colors, size, mediaQuery };

export default theme;
