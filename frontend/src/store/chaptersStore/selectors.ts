import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'
import { Chapter, State, Topic } from './types'

const getChapters = (state: RootState) => state.chapters

export const getChaptersData = createSelector(
  [getChapters],
  (state) => state.chapters
)
export const getChapter = (chapterName: string) =>
  createSelector(
    [getChapters],
    (state) =>
      state.chapters.find((el: Chapter) => el.name === chapterName) || null
  )
export const getTopic = (chapterName: string, topicName: string) =>
  createSelector(
    [getChapters],
    (state) =>
      state.chapters
        .find((el: Chapter) => el.name === chapterName)
        ?.topics.find((el: Topic) => el.name === topicName) || null
  )
export const getTopicMarks = (
  chapterName: string,
  topicName: string,
  teacher: string
) =>
  createSelector(
    [getChapters],
    (state: State) =>
      state.marks?.filter(
        (el) =>
          el.chapterName === chapterName &&
          el.topicName === topicName &&
          el.teacherLogin === teacher
      ) || null
  )
