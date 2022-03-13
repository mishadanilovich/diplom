import { createSlice } from '@reduxjs/toolkit'
import { CHAPTERS_REDUCER } from './constants'
import * as emptySagaActions from './actions'
import { Chapter, Chapters, State } from './types'

const initialState: State = {
  chapters: null,
}

export const ChaptersReducer = createSlice({
  name: CHAPTERS_REDUCER,
  initialState,
  reducers: {
    reset: (state: State) => {
      state.chapters = null
    },
    setChapters: (state: State, { payload }: { payload: Chapters }) => {
      state.chapters = payload
    },
    addChapter: (state: State, { payload }: { payload: Chapter }) => {
      if (state.chapters) state.chapters = [...state.chapters, payload]
    },
    removeChapter: (state: State, { payload }: { payload: string }) => {
      if (state.chapters)
        state.chapters = state.chapters.filter((el) => el.name !== payload)
    },
  },
})

const allActions = { ...ChaptersReducer.actions, ...emptySagaActions }

export const { reset, setChapters, addChapter, removeChapter } = allActions

export default ChaptersReducer.reducer
