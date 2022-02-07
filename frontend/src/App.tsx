import React from 'react'
import styled from 'styled-components'
import { AuthHoc } from './hoc'
import { ConsolePage } from './routes'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const App: React.FC = () => {
  return (
    <AppContainer>
      <AuthHoc>
        <ConsolePage />
      </AuthHoc>
    </AppContainer>
  )
}

export default App
