import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultScreen, FullScreen, Logout } from '../../../../icons'

import {
  HeaderContainer,
  LogoutButton,
  ScreenButton,
  Separator,
  UserInfo,
} from './styles'

import { LOGOUT } from '../../../../constants'
import { logout } from '../../../../redux/actions'
import { RootState } from '../../../../redux'

export const HeaderAction = (): JSX.Element => {
  const dispatch = useDispatch()

  const [widthWindow, setWidthWindow] = useState(window.screen.width)
  const [isFullScreen, setIsFullScreen] = useState(!!document.fullscreenElement)
  const { login, subLogin } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    return () => window.removeEventListener('resize', handleWidth)
  }, [])

  const handleScreen = () => {
    if (document.fullscreenElement === null) {
      setIsFullScreen(true)
      document.documentElement.requestFullscreen()
    } else if (document.fullscreenElement) {
      setIsFullScreen(false)
      document.exitFullscreen()
    }
  }

  const handleWidth = useCallback(() => {
    setWidthWindow(window.screen.width)
  }, [])

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  return (
    <HeaderContainer>
      <UserInfo>
        {login}
        {subLogin && (
          <>
            <Separator>:</Separator>
            {subLogin}
          </>
        )}
      </UserInfo>
      <LogoutButton onClick={handleLogout}>
        {widthWindow > 768 && `${LOGOUT}`}
        <Logout className="logout-icon" />
      </LogoutButton>
      {document.fullscreenEnabled && (
        <ScreenButton onClick={handleScreen}>
          {isFullScreen && <DefaultScreen className="screen-icon" />}
          {!isFullScreen && <FullScreen className="screen-icon" />}
        </ScreenButton>
      )}
    </HeaderContainer>
  )
}
