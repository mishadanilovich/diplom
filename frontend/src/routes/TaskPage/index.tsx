import React from 'react'
import { Header, Loader } from '../../components'

export const TaskPage = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="center">
        <Loader />
      </div>
    </div>
  )
}
