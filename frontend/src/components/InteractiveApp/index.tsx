import React, { useEffect } from 'react'
import { Container } from './styles'
import { setTestMark } from '../Test/store/actions'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { User } from '../../hoc/AuthHoc/store/types'
import { getUser } from '../../hoc/AuthHoc/store/selector'
import { useParams } from 'react-router-dom'
import { STUDENT } from '../../constants'

export const InteractiveApp = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector<User>(getUser)
  const { chapterName, topicName } = useParams()

  useEffect(() => {
    if (chapterName && topicName && user.role === STUDENT) {
      console.log('Heel')
      dispatch(
        setTestMark({
          userLogin: user.login,
          teacherLogin: user.teacher as string,
          mark: '1/4',
          quizType: 'task',
          chapterName,
          topicName,
        })
      )
    }
  }, [])

  return (
    <Container className="center">
      <iframe
        src="https://learningapps.org/watch?app=5680297"
        style={{
          border: '0px',
          width: '100%',
          height: '600px',
          position: 'relative',
        }}
        allowFullScreen
      />
    </Container>
  )
}
