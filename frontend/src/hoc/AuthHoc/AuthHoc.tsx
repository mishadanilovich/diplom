import React, { useEffect } from 'react'
import * as Lockr from 'lockr'
import { Props } from './types'
import * as routes from '../../routes/constantsRoutes'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getUser } from './store/selector'
import { identifyUser } from './store/actions'
import { getChaptersData } from '../../store/chaptersStore/selectors'
import { Loader } from '../../components'

export const AuthHoc = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(getUser)
  const chapters = useAppSelector(getChaptersData)
  const isAuth = Lockr.get<string | null>('user')

  console.log(user)

  useEffect(() => {
    if (isAuth) dispatch(identifyUser({ login: isAuth }))
  }, [isAuth])

  useEffect(() => {
    if (!isAuth) navigate(routes.AUTH)
    else if (user && user.firstName && user.secondName && chapters) {
      if (chapters.length === 1) return navigate('/roadmap/' + chapters[0].name)
      navigate(routes.HOME)
    } else navigate(routes.PROFILE)
  }, [user, chapters])

  return <>{!user && isAuth ? <Loader /> : children}</>
}
