import React from 'react'
import { StyledButton } from './styles'
import { IProps } from './types'
import * as icons from '../../icons/constants'
import { AccountCircle, Logout, Students } from '../../icons'

const getIcon = (iconName: string): JSX.Element | undefined => {
  switch (iconName) {
    case icons.ACCOUNT_CIRCLE:
      return <AccountCircle />
    case icons.STUDENTS:
      return <Students />
    case icons.LOGOUT:
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
