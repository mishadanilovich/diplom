import React from 'react'
import { StyledButton } from './styles'
import { IProps } from './types'
import { ACCOUNT_CIRCLE } from '../../icons/constants'
import { AccountCircle } from '../../icons'

const getIcon = (iconName: string): JSX.Element | undefined => {
  switch (iconName) {
    case ACCOUNT_CIRCLE:
      return <AccountCircle />
    default:
      return
  }
}

export const IconButton = ({ iconName }: IProps) => {
  return <StyledButton>{getIcon(iconName)}</StyledButton>
}
