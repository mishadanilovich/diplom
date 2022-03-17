import React from 'react'
import { Header, InteractiveApp } from '../../components'

export const TaskPage = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="center">
        <InteractiveApp />
      </div>
    </div>
  )
}
