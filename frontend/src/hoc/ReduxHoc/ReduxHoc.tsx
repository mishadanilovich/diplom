import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../redux'
import { Props } from './types'

export const ReduxHoc = ({ children }: Props): JSX.Element => {
  return <Provider store={store}>{children}</Provider>
}
