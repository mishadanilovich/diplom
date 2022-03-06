import React from 'react'
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

export const Header = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

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

  return (
    <StyledHeader>
      <LeftContainer>
        {!matchPath(pathname, routes.HOME) && (
          <ArrowBack onClick={handleArrowBackClick} />
        )}
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
