import { DefaultTheme } from 'styled-components';

const makeFont = (weight: number, size: number) => {
  return `font-weight: ${weight}; font-size: ${size}px;`;
};

type FontsName = 'naviBold' | 'navi' | 'title' | 'body';
type ColorsName = 'black' | 'white' | 'gray1' | 'gray2' | 'blue1' | 'blue2';

export type FontConfig = {
  [key in FontsName]: string;
};

export type ColorConfig = {
  [key in ColorsName]: string;
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
  blue1: '#CBC5F0',
  blue2: '#4130be',
};

const theme: DefaultTheme = { fonts, colors };

export default theme;
