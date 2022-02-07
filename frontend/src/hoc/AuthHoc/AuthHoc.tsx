import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { AuthPage } from '../../routes'
import { authenticateSuccess } from '../../redux/actions'
import { RootState } from '../../redux'
import { Props } from './types'

export const AuthHoc = ({ children }: Props): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    const isAuth = Cookies.get('sendsay_session')
    if (isAuth) {
      const login = Cookies.get('user_login')
      const subLogin = Cookies.get('user_subLogin')
      dispatch(
        authenticateSuccess({
          sessionKey: isAuth,
          login: login,
          subLogin: subLogin,
        })
      )
    }
  }, [])

  const isLoggedIn = useSelector(
    (state: RootState) => !!state.auth.sessionKey?.length
  )

  return <>{!isLoggedIn ? <AuthPage /> : children}</>
}
