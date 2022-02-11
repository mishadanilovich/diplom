import React, { useEffect } from 'react'
import { Props } from './types'
import { useAppSelector } from '../../store/hooks'
import { getTokenAndError } from './store/selector'
import * as routes from '../../routes/constantsRoutes'
import { useNavigate } from 'react-router-dom'

export const AuthHoc = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()
  const { token } = useAppSelector(getTokenAndError)

  useEffect(() => {
    if (!token) {
      console.log(token)
      navigate(routes.AUTH)
    }
  }, [token])

  return <>{children}</>
}
