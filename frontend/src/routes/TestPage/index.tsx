import React from 'react'
import { Header, Loader, Test } from '../../components'
import { useAppSelector } from '../../store/hooks'
import { getLoading } from '../../hoc/AuthHoc/store/selector'
import { useParams } from 'react-router-dom'
import { getTopic } from '../../store/chaptersStore/selectors'
import { Topic } from '../../store/chaptersStore/types'

export const TestPage = () => {
  const { chapterName, topicName } = useParams()
  const isLoading = useAppSelector(getLoading)
  const topic = useAppSelector<Topic>(
    getTopic(chapterName as string, topicName as string)
  )

  return isLoading && !topic ? (
    <Loader />
  ) : (
    <div className="layout-container">
      <Header />
      <Test data={topic} />
    </div>
  )
}
