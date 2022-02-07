import React from 'react'

export interface Props {
  children: JSX.Element
}

export interface AuthProps {
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}
