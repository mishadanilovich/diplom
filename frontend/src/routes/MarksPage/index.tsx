import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import * as Lockr from 'lockr'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getLoading, getUser } from '../../hoc/AuthHoc/store/selector'
import { Header, Loader, MarksTable } from '../../components'
import { sendRequest } from '../../hoc/AuthHoc/store/actions'
import { getTopicMarks } from '../../store/chaptersStore/selectors'
import { Mark } from '../../store/chaptersStore/types'
import { Users } from '../../hoc/AuthHoc/store/types'

export const MarksPage = () => {
  const { chapterName, topicName } = useParams()
  const dispatch = useAppDispatch()
  const user = useAppSelector(getUser)
  const isLoading = useAppSelector(getLoading)
  const marks = useAppSelector<Mark[] | null>(
    getTopicMarks(chapterName as string, topicName as string, user.login)
  )
  const data = useMemo(() => {
    if (!marks) return null
    const students = Lockr.get<Users>('users').students
    return marks.map(({ testMark, taskMark, userLogin }) => {
      const student = students.find((el) => el.login === userLogin)
      const username = `${student?.secondName || ''} ${
        student?.firstName || ''
      }`
      return {
        testMark,
        taskMark,
        username,
      }
    })
  }, [marks])

  useEffect(() => {
    dispatch(sendRequest())
  }, [])

  return isLoading || !user ? (
    <Loader />
  ) : (
    <div className="layout-container">
      <Header />
      <MarksTable data={data || []} />
    </div>
  )
}
