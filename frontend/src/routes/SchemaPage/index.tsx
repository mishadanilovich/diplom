import React from 'react'
import { FancyBox, Header } from '../../components'
import { StyledTitle } from './styles'
import { SCHEMA_TITLE } from '../../constants'

export const SchemaPage = () => {
  return (
    <div className="layout-container" style={{ overflow: 'hidden' }}>
      <Header />
      <StyledTitle>{SCHEMA_TITLE}</StyledTitle>
      <FancyBox url="https://user84060.clients-cdnnow.ru/uploads/5fdb29ffce90b403880027.png" />
    </div>
  )
}
