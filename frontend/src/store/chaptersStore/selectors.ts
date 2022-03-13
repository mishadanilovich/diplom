import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'

const getChapters = (state: RootState) => state.chapters

export const getChaptersData = createSelector(
  [getChapters],
  (state) => state.chapters
)
