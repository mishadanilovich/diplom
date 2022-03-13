import React from 'react'
import { Header, Loader, Theory } from '../../components'
import { useAppSelector } from '../../store/hooks'
import { getLoading } from '../../hoc/AuthHoc/store/selector'
import { getTopic } from '../../store/chaptersStore/selectors'
import { useParams } from 'react-router-dom'

export const TheoryPage = () => {
  const { chapterName, topicName } = useParams()
  const isLoading = useAppSelector(getLoading)
  const topic = useAppSelector(
    getTopic(chapterName as string, topicName as string)
  )

  return isLoading && !topic ? (
    <Loader />
  ) : (
    <div className="layout-container">
      <Header />
      <Theory topic={topic} />
    </div>
  )
}
