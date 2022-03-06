import React from 'react'
import { StyledButton } from './styles'
import { IProps } from './types'
import { ACCOUNT_CIRCLE, LOGOUT } from '../../icons/constants'
import { AccountCircle, Logout } from '../../icons'

const getIcon = (iconName: string): JSX.Element | undefined => {
  switch (iconName) {
    case ACCOUNT_CIRCLE:
      return <AccountCircle />
    case LOGOUT:
      return <Logout />
    default:
      return
  }
}

export const IconButton = ({
  iconName,
  ...props
}: IProps &
  JSX.IntrinsicAttributes &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props}>{getIcon(iconName)}</StyledButton>
}
