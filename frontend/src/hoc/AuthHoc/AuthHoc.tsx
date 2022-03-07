import React, { useEffect } from 'react'
import * as Lockr from 'lockr'
import { Props } from './types'
import * as routes from '../../routes/constantsRoutes'
import { useNavigate } from 'react-router-dom'
// import { useAppSelector } from '../../store/hooks'
// import { RootState } from '../../store/store'

export const AuthHoc = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()
  // const { isLoading } = useAppSelector((state: RootState) => state.auth)
  const isAuth = Lockr.get('user')

  useEffect(() => {
    if (!isAuth) navigate(routes.AUTH)
    else navigate(routes.HOME)
  }, [isAuth])

  return <>{children}</>
}
