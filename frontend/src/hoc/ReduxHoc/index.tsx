import React from 'react'
import { IProps } from './types'
import { Provider } from 'react-redux'
import store from '../../redux'

export const ReduxHoc = ({ children }: IProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>
}
