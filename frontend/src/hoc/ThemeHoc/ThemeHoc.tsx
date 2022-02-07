import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles'

import { Props } from './types'

export const ThemeHoc = ({ children }: Props): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
