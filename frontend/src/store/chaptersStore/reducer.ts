import { createSlice } from '@reduxjs/toolkit'
import { CHAPTERS_REDUCER } from './constants'
import * as emptySagaActions from './actions'
import { Chapter, Chapters, Mark, State, UpdateChaptersPayload } from './types'

const initialState: State = {
  chapters: null,
  marks: null,
}

export const ChaptersReducer = createSlice({
  name: CHAPTERS_REDUCER,
  initialState,
  reducers: {
    resetChapters: (state: State) => {
      state.chapters = null
    },
    setChapters: (state: State, { payload }: { payload: Chapters }) => {
      state.chapters = payload
    },
    updateChapter: (
      state: State,
      { payload }: { payload: UpdateChaptersPayload }
    ) => {
      const { chapterName, topics } = payload
      if (state.chapters)
        state.chapters = state.chapters.map((item) =>
          item.name === chapterName ? { ...item, topics } : item
        )
    },
    addChapter: (state: State, { payload }: { payload: Chapter }) => {
      if (state.chapters) state.chapters = [...state.chapters, payload]
    },
    removeChapter: (state: State, { payload }: { payload: string }) => {
      if (state.chapters)
        state.chapters = state.chapters.filter((el) => el.name !== payload)
    },
    setMarks: (state: State, { payload }: { payload: Mark[] | null }) => {
      state.marks = payload
    },
  },
})

const allActions = { ...ChaptersReducer.actions, ...emptySagaActions }

export const {
  resetChapters,
  setChapters,
  addChapter,
  removeChapter,
  updateChapter,
  setMarks,
} = allActions

export default ChaptersReducer.reducer
