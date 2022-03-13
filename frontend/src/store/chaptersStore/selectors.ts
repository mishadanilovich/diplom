import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'
import { Chapter, Topic } from './types'

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
