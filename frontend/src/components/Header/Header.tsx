import React, { useCallback } from 'react'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'
import * as Lockr from 'lockr'
import {
  LeftContainer,
  RightContainer,
  StyledHeader,
  StyledProfileButton,
} from './styles'
import { IconButton } from '../IconButton'
import { ACCOUNT_CIRCLE, LOGOUT } from '../../icons/constants'
import { ArrowBack } from '../../icons'
import * as routes from '../../routes/constantsRoutes'
import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../hoc/AuthHoc/store/selector'
import { ProfileUser } from '../ProfileForm/types'

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const user = useAppSelector(getUser) as ProfileUser

  const handleArrowBackClick = () => {
    navigate(-1)
  }

  const handleProfileClick = () => {
    navigate(routes.PROFILE)
  }

  const handleLogout = () => {
    Lockr.rm('user')
    navigate(routes.AUTH)
  }

  const renderArrowBack = useCallback(() => {
    if (!matchPath(pathname, routes.HOME)) return null
    if (
      matchPath(pathname, routes.PROFILE) &&
      !user.firstName &&
      !user.secondName
    )
      return null
  }, [])

  return (
    <StyledHeader>
      <LeftContainer>
        {renderArrowBack() && <ArrowBack onClick={handleArrowBackClick} />}
      </LeftContainer>
      <RightContainer>
        {!matchPath(pathname, routes.PROFILE) && (
          <IconButton iconName={ACCOUNT_CIRCLE} onClick={handleProfileClick} />
        )}
        {matchPath(pathname, routes.PROFILE) && (
          <StyledProfileButton iconName={LOGOUT} onClick={handleLogout} />
        )}
      </RightContainer>
    </StyledHeader>
  )
}
