import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import styled from 'styled-components'
import {
  NotFoundPage,
  RegisterPage,
  AuthPage,
  RoadmapPage,
  ProfilePage,
  ChaptersPage,
  TopicPage,
  TheoryPage,
  SchemaPage,
  TestPage,
  TaskPage,
} from './routes'
import { AuthHoc } from './hoc'
import * as routes from './routes/constantsRoutes'

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
        <AuthHoc>
          <Switch>
            <Route path={routes.AUTH} element={<AuthPage />} />
            <Route path={routes.REGISTER} element={<RegisterPage />} />
            <Route path={routes.HOME} element={<ChaptersPage />} />
            <Route path={routes.ROADMAP} element={<RoadmapPage />} />
            <Route path={routes.TOPIC_CARD} element={<TopicPage />} />
            <Route path={routes.TOPIC_THEORY} element={<TheoryPage />} />
            <Route path={routes.TOPIC_SCHEMA} element={<SchemaPage />} />
            <Route path={routes.TOPIC_TEST} element={<TestPage />} />
            <Route path={routes.TOPIC_TASK} element={<TaskPage />} />
            <Route path={routes.PROFILE} element={<ProfilePage />} />
            <Route path={routes.ERROR} element={<NotFoundPage />} />
          </Switch>
        </AuthHoc>
      </Router>
    </AppContainer>
  )
}

export default App
