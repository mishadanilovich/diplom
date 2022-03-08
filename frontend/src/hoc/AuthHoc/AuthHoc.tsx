import React, { useEffect } from 'react'
import * as Lockr from 'lockr'
import { Props } from './types'
import * as routes from '../../routes/constantsRoutes'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getUser } from './store/selector'
import { identifyUser } from './store/actions'

export const AuthHoc = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()
  const isAuth = Lockr.get<string | null>('user')

  console.log(user)

  useEffect(() => {
    if (!isAuth) navigate(routes.AUTH)
    else {
      dispatch(identifyUser({ login: isAuth }))
    }
  }, [isAuth])

  useEffect(() => {
    if (user) navigate(routes.HOME)
  }, [user])

  return <>{children}</>
}
