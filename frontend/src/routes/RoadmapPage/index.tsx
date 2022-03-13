import React from 'react'
import { Header, Loader } from '../../components'
import { Roadmap } from '../../components/Roadmap'
import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../hoc/AuthHoc/store/selector'
import { User } from '../../hoc/AuthHoc/store/types'
import { useParams } from 'react-router-dom'
import { getChapter } from '../../store/chaptersStore/selectors'

export const RoadmapPage = () => {
  const user = useAppSelector<User | null>(getUser)
  const { chapterName } = useParams()
  const chapter = useAppSelector(getChapter(chapterName as string))

  return (
    <>
      {!user || !chapter ? (
        <Loader />
      ) : (
        <div className="layout-container">
          <Header />
          <Roadmap user={user} chapter={chapter} />
        </div>
      )}
    </>
  )
}
