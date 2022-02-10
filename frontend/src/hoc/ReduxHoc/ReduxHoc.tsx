import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../store/store'
import { Props } from './types'

export const ReduxHoc = ({ children }: Props): JSX.Element => {
  console.log(store.getState())
  return <Provider store={store}>{children}</Provider>
}
