import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ReduxHoc, ThemeHoc } from './hoc'

ReactDOM.render(
  <React.StrictMode>
    <ReduxHoc>
      <ThemeHoc>
        <App />
      </ThemeHoc>
    </ReduxHoc>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
