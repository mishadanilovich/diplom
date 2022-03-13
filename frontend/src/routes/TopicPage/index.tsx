import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getLoading } from '../../hoc/AuthHoc/store/selector'
import { Header, Loader, TopicCard } from '../../components'
import { sendRequest } from '../../hoc/AuthHoc/store/actions'
import { getTopic } from '../../store/chaptersStore/selectors'
import { TopicPageParams } from './types'

export const TopicPage = () => {
  const { chapterName, topicName } = useParams<TopicPageParams>()
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(getLoading)
  const topic = useAppSelector(
    getTopic(chapterName as string, topicName as string)
  )

  useEffect(() => {
    dispatch(sendRequest())
  }, [])

  return isLoading || !topic ? (
    <Loader />
  ) : (
    <div className="layout-container">
      <Header />
      <TopicCard topic={topic} />
    </div>
  )
}
