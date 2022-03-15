import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import * as Lockr from 'lockr'
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
  MarksPage,
} from './routes'
import { AuthHoc } from './hoc'
import * as routes from './routes/constantsRoutes'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { setMarks } from './store/chaptersStore/reducer'
import { Mark } from './store/chaptersStore/types'
import { getUser } from './hoc/AuthHoc/store/selector'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(getUser)

  useEffect(() => {
    const marks = Lockr.get<Mark[] | null>('marks')
    dispatch(setMarks(marks))
  }, [user])

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
            <Route path={routes.TOPIC_MARKS} element={<MarksPage />} />
            <Route path={routes.ERROR} element={<NotFoundPage />} />
          </Switch>
        </AuthHoc>
      </Router>
    </AppContainer>
  )
}

export default App
