import React from 'react'
import { Props } from './types'

export const AuthHoc = ({ children }: Props): JSX.Element => {
  return <>{children}</>
}
