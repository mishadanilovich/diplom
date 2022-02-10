import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import styled from 'styled-components'
import { AuthHoc } from './hoc'
import { NotFoundPage } from './routes/NotFoundPage'
import { HomePage } from './routes/HomePage'

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
        <Router>
          <Switch>
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Switch>
        </Router>
      </AuthHoc>
    </AppContainer>
  )
}

export default App
