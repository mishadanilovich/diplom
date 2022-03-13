import React, { useMemo } from 'react'
import * as Lockr from 'lockr'
import { Header, Loader } from '../../components'
import { Roadmap } from '../../components/Roadmap'
import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../hoc/AuthHoc/store/selector'
import { User, Users } from '../../hoc/AuthHoc/store/types'
import * as naming from '../../constants'
import { Topics } from './types'

export const RoadmapPage = () => {
  const user = useAppSelector<User | null>(getUser)
  const users = useMemo<Users | null>(() => Lockr.get('users'), [])
  const topics = useMemo<Topics | null>(() => {
    if (user?.role === naming.STUDENT && users?.teachers)
      return (
        users.teachers.find((el) => el.login === user.teacher)?.topics || null
      )
    if (user?.role === naming.TEACHER) {
      const topics = Array.from(naming.mockTopic.topics.values())
      return topics.map((item) => ({
        ...item,
        checked: !!user.topics?.find((el) => el.name === item.name),
      }))
    }
    return null
  }, [user, users])

  return (
    <>
      {!user ? (
        <Loader />
      ) : (
        <div className="layout-container">
          <Header />
          <Roadmap user={user} topics={topics} />
        </div>
      )}
    </>
  )
}
