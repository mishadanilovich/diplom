import React from 'react'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'
import { LeftContainer, RightContainer, StyledHeader } from './styles'
import { IconButton } from '../IconButton'
import { ACCOUNT_CIRCLE } from '../../icons/constants'
import { ArrowBack } from '../../icons'
import * as routes from '../../routes/constantsRoutes'

export const Header = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleArrowBackClick = () => {
    navigate(-1)
  }

  return (
    <StyledHeader>
      <LeftContainer>
        {!matchPath(pathname, routes.HOME) && (
          <ArrowBack onClick={handleArrowBackClick} />
        )}
      </LeftContainer>
      <RightContainer>
        <IconButton iconName={ACCOUNT_CIRCLE} />
      </RightContainer>
    </StyledHeader>
  )
}
