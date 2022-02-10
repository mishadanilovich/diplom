import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import styled from 'styled-components'
import * as routes from './routes/constantsRoutes'
import { NotFoundPage } from './routes/NotFoundPage'
import { HomePage } from './routes/HomePage'
import { AuthPage } from './routes'
import { RegisterPage } from './routes/RegisterPage'

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
      <Router>
        <Switch>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.AUTH} element={<AuthPage />} />
          <Route path={routes.REGISTER} element={<RegisterPage />} />
          <Route path={routes.ERROR} element={<NotFoundPage />} />
        </Switch>
      </Router>
    </AppContainer>
  )
}

export default App
