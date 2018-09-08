import { css } from 'styled-components';

export const screenSizes = {
  xs: 320,
  sm: 480,
  md: 780,
  lg: 1170,
};
// Iterate through the sizes and create a media template
export const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${screenSizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});


const themeCommon = {
  fontMain: 'objective, helvetica, arial, sans-serif',
  fontSecond: '"open sans", helvetica, arial, sans-serif',
  colorMain: '#333',
  colorGray: '#777',
  colorPale: '#aeaeae',
  colorActive: '#377dff',
  media: screenSizes,
};
export const themeMobile = Object.assign({}, themeCommon, {
  isMobile: true,
  test: 'red',
});
export const themeDesktop = Object.assign({}, themeCommon, {
  test: 'blue',
});
