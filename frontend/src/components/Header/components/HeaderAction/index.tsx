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
import { RootState } from '../../../../store/store'
import { reset } from '../../../../hoc/AuthHoc/store/reducer'

export const HeaderAction = (): JSX.Element => {
  const dispatch = useDispatch()

  const [widthWindow, setWidthWindow] = useState(window.screen.width)
  const [isFullScreen, setIsFullScreen] = useState(!!document.fullscreenElement)
  const { token, error } = useSelector((state: RootState) => state.auth)

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
    dispatch(reset())
  }, [])

  return (
    <HeaderContainer>
      <UserInfo>
        {token}
        {error && (
          <>
            <Separator>:</Separator>
            {error}
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
