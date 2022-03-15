import React, { useMemo } from 'react'
import 'swiper/swiper-bundle.css'
import 'swiper/modules/navigation/navigation.min.css'
import * as naming from '../../constants'
import { StyledButton, TheoryContainer } from './styles'
import { Props } from './types'
import { useLocation, useNavigate } from 'react-router-dom'
import { lastIndexOf } from 'lodash'
import { useAppSelector } from '../../store/hooks'
import { getLoading } from '../../hoc/AuthHoc/store/selector'
import { DefaultTopic, PrimaKraskala } from './Topics'

export const Theory = ({ topic }: Props) => {
  const isLoading = useAppSelector(getLoading)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const testPathname = useMemo(
    () => `../${pathname.slice(1, lastIndexOf(pathname, '/'))}/test`,
    []
  )

  const renderTopic = () => {
    switch (topic.name) {
      case naming.PRIMA_KRASKALA:
        return <PrimaKraskala />
      default:
        return <DefaultTopic />
    }
  }

  return (
    <TheoryContainer>
      <h2>{topic.title}</h2>
      {renderTopic()}
      <StyledButton
        onClick={() => navigate(testPathname)}
        isLoading={isLoading}
      >
        {naming.TAKE_TEST}
      </StyledButton>
    </TheoryContainer>
  )
}
