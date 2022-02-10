import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#474747',
    blue: '#0055FB',
    gray: '#E1E1E1',
    red: '#CF2C00',
    green: '#30B800',
    lightBlue: '#EDF6FF',
    lightGray: '#F3F2F2',
    lightBlack: 'rgba(0, 0, 0, 0.2)',
    lightBoxShadow: '#0000001A',
    disabled: '#C4C4C4',
    labelColor: 'rgba(71, 71, 71, 0.8)',
    turquoise: '#B2FFF1',
  },
  zIndex: {
    outSide: 10,
    modal: 15,
  },
  borders: {
    main: `1px solid #F3F2F2`,
    error: '1px solid #EA5128FF',
    success: '1px solid rgba(0, 0, 0, 0.2)',
    blue: '2px solid #45A5FF',
    lightError: '1px solid rgba(0, 0, 0, 0.2)',
    lightBlue: '2px solid rgba(69, 165, 255, 0.5)',
    header: `2px solid #E1E1E1`,
  },
  boxShadow: {
    error: '0px 0px 5px rgba(207, 44, 0, 0.5)',
    lightGray: '-15px 0 20px 0 rgba(246, 246, 246, 0.8)',
  },
  background: {
    hover:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4',
    active:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;',
    error: 'rgba(207, 44, 0, 0.1)',
  },
  fonts: ['Roboto', 'sans-serif'],
  fontSizes: {
    sm: 12,
    m: 14,
    l: 16,
    xl: 22,
  },
}

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-family: ${theme.fonts[0]}, ${theme.fonts[1]};
    color: ${theme.colors.black};
  }
  
  body {
    background: ${theme.colors.white};
  }

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0;
  }
  
  button {
    border: none;
    outline: none;
    background: none;
  }
`
