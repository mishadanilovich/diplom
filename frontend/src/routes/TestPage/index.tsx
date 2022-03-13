import React from 'react'
import { Header, Loader } from '../../components'
import { useAppSelector } from '../../store/hooks'
import { getLoading } from '../../hoc/AuthHoc/store/selector'

export const TestPage = () => {
  const isLoading = useAppSelector(getLoading)

  return isLoading ? (
    <Loader />
  ) : (
    <div className="layout-container">
      <Header />
      Тест
    </div>
  )
}
