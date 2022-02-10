import React from 'react'
import {
  NotFoundPageContainer,
  NotFoundPageContext,
  NotFoundPageDescription,
  NotFoundPageStatus,
} from './styles'
import { Logo } from '../../icons'
import { NOT_FOUND_PAGE_STATUS, NOT_FOUND_PAGE_TEXT } from '../../constants'

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <NotFoundPageContext>
        <NotFoundPageStatus>{NOT_FOUND_PAGE_STATUS}</NotFoundPageStatus>
        <NotFoundPageDescription>{NOT_FOUND_PAGE_TEXT}</NotFoundPageDescription>
      </NotFoundPageContext>
      <Logo />
    </NotFoundPageContainer>
  )
}
