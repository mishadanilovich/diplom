import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ReduxHoc } from './hoc/ReduxHoc'

ReactDOM.render(
  <React.StrictMode>
    <ReduxHoc>
      <App />
    </ReduxHoc>
  </React.StrictMode>,
  document.getElementById('root')
)
